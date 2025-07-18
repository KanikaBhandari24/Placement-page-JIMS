
  window.onload = function () {
    const recruiters = [
      "images/lemon_tree_hotels.png",
      "images/infosys.png",
      "images/aon.png",
      "images/ani.png",
      "images/asian_paints.png",
      "images/logo.png",
      "images/mercer.png",
      "images/Natwestgroup.png",
      "images/protiviti.png",
      "images/tcs2.png",
      "images/the_times_of_india.png",
      "images/wipro_applying.png",
      "images/wipro.png",
      "images/zee_cinema.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPl7lqoIxirLa3qZayQsyNNU-FZj4ielxhKg&s"
    ];

    const container = document.getElementById("internship-logos");

    if (!container) {
      console.error("Container #internship-logos not found!");
      return;
    }

    recruiters.forEach((logoPath) => {
      const logoCard = document.createElement("div");
      logoCard.classList.add("logo-card-I");

      logoCard.innerHTML = `
        <img src="${logoPath}" alt="Company Logo" />
      `;

      container.appendChild(logoCard);
    });
  };
