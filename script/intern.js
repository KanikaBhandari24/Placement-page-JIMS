
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
      "images/nn.png",
      "images/protiviti.png",
      "images/tcs2.png",
      "images/the_times_of_india.png",
      "images/twitter_blue.png",
      "images/twitter.png",
      "images/wipro_applying.png",
      "images/wipro.png",
      "images/zee_cinema.png"
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
