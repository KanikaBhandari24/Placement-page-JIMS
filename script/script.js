
const slider = document.querySelector(".slider.students");
  const cards = document.querySelectorAll(".student-card");
  const cardWidth = cards[0].offsetWidth + 20; // Include margin if any

  let autoSlideTimer;

  // Function to scroll one card forward
  function slideNext() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;
    let newScroll = currentScroll + cardWidth;

    if (newScroll > maxScroll) newScroll = 0; // reset to start

    slider.scrollTo({
      left: newScroll,
      behavior: "smooth"
    });
  }

  // Function to scroll one card backward
  function slidePrev() {
    const currentScroll = slider.scrollLeft;
    let newScroll = currentScroll - cardWidth;

    if (newScroll < 0) newScroll = 0;

    slider.scrollTo({
      left: newScroll,
      behavior: "smooth"
    });
  }

  // Start auto slide
  function startAutoSlide() {
    autoSlideTimer = setInterval(slideNext, 1200);
  }

  // Stop auto slide
  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  // Event listeners for buttons
  document.querySelector(".arrow.left").addEventListener("click", () => {
    stopAutoSlide();
    slidePrev();
    startAutoSlide(); // restart timer after manual click
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    stopAutoSlide();
    slideNext();
    startAutoSlide(); // restart timer after manual click
  });

  // Start auto sliding on load
  startAutoSlide();


  // Counter Animation (slower)
// Counter Animation with faster speed for LPA values
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const isLPA = counter.classList.contains("lpa");

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = isLPA ? Math.max(target / 100, 1) : target / 60;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, isLPA ? 15 : 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
  

