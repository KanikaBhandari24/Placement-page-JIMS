  const recruiters = [
    "images/lemon_tree_hotels.png",
    "images/infosys.png",
    "images/aon.png",
    "images/ani.png",
    "images/asian_paints.png",
    // "images/LOGO_GGSIUniv.png",
    "https://www.jimsd.org/assets/img/logo/intinfotech.png",
    "images/mercer.png",
    "images/Natwestgroup.png",
    "https://www.jimsd.org/assets/img/logo/india_today_group.png",
    "images/protiviti.png",
    "images/tcs2.png",
    "images/the_times_of_india.png", 
    "https://www.jimsd.org/assets/img/logo/ibm.png",
    "https://www.jimsd.org/assets/img/logo/deloitte.png",
    "images/wipro_applying.png",
    "https://www.jimsd.org/assets/img/logo/hexaware.png",
    "images/zee_cinema.png",
    "https://www.jimsd.org/assets/img/logo/Natwestgroup.png",
    "https://www.jimsd.org/assets/img/logo/GenesisBcw.png",
    "https://www.jimsd.org/assets/img/logo/wipro.png",
    "https://www.jimsd.org/assets/img/logo/byjus.png",
    "https://www.jimsd.org/assets/img/logo/avian.png",
    "https://www.jimsd.org/assets/img/logo/fis.png",
    "https://www.jimsd.org/assets/img/logo/ht_media.png",
    "https://www.jimsd.org/assets/img/logo/infoedge.png",
    "https://www.jimsd.org/assets/img/logo/ethos.png",
    "https://www.jimsd.org/assets/img/logo/indigo.png",
    "https://www.jimsd.org/assets/img/logo/protiviti.png",
    "https://www.jimsd.org/assets/img/logo/indusindbank.png",
    "https://www.jimsd.org/assets/img/logo/bt.png",
    "https://www.jimsd.org/assets/img/logo/infinity.png"

  ];

  const container = document.getElementById("recruiters-logos");

  recruiters.forEach(company => {
    const logoCard = document.createElement("div");
    logoCard.classList.add("logo-card-R");

    logoCard.innerHTML = `
      <img src="${company}" alt="${company} Logo" />
    
    `;

    container.appendChild(logoCard);
  });

