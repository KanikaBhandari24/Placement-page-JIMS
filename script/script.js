// Duplicate student and recruiter marquee for smooth infinite effect
document.querySelectorAll('.marquee').forEach(marquee => {
    marquee.innerHTML += marquee.innerHTML;
  });
  
  // Counter Animation (slower)
// Counter Animation with faster speed for LPA values
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const isLPA = counter.classList.contains("lpa");

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = isLPA ? Math.max(target / 120, 1) : target / 170;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, isLPA ? 15 : 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
  
  
