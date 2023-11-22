
//Permet de retirer le .html de l'URL (et ca fonctionne vraiement)
//A VOIR PAR RAPPORT AU SEO
/*if (window.location.href.endsWith('.html')) {
  window.history.replaceState({}, document.title, window.location.href.slice(0, -5));
}
*/
//-------------------------------------------------


// Date et heure à laquelle la div doit disparaître (format : année, mois - 1, jour, heure, minute, seconde)
const targetDate = new Date(2023, 7, 12, 12, 58, 0); // Note: les mois commencent à 0 (0 = janvier, 1 = février, etc.)

function checkDisappear() {
  const currentDate = new Date();

  if (currentDate >= targetDate) {
    const divToHide = document.getElementById("myDiv");
    divToHide.classList.add("hidden");
  }
}

// Vérifie périodiquement si la div doit disparaître
setInterval(checkDisappear, 1000); // Vérification toutes les secondes

//----------------------------------------



/* SLIDER CATEGORIE TOP PAGE*/
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    let currentIndex = 0;
    const slidesToShow = 2; // Nombre de slides à afficher à la fois

    const slideWidth = sliderItems[0].clientWidth;

    function slideTo(index) {
      currentIndex = index;
      sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = Math.max(currentIndex - slidesToShow, 0);
      slideTo(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      const maxIndex = Math.max(sliderItems.length - slidesToShow, 0);
      currentIndex = Math.min(currentIndex + slidesToShow, maxIndex);
      slideTo(currentIndex);
    });

    sliderTrack.addEventListener('wheel', (event) => {
      event.preventDefault();
      const delta = -Math.sign(event.deltaX); // Inverser la direction du défilement
      currentIndex = Math.max(0, Math.min(currentIndex - delta, sliderItems.length - 1));
      slideTo(currentIndex);
    });
});



//--------------------------------------------------------



/* SLIDER JEUX TOP PAGE*/
document.addEventListener('DOMContentLoaded', function() {
  const sliderTrackJeux = document.querySelector('.slider-track-jeux');
  const sliderItemsJeux = document.querySelectorAll('.slider-item-jeux');
  const prevButtonJeux = document.querySelector('.slider-prev-jeux');
  const nextButtonJeux = document.querySelector('.slider-next-jeux');

  let currentIndex = 0;
  const slidesToShow = 2; // Nombre de slides à afficher à la fois

  const slideWidth = sliderItemsJeux[0].clientWidth;

  function slideTo(index) {
    currentIndex = index;
    sliderTrackJeux.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  prevButtonJeux.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - slidesToShow, 0);
    slideTo(currentIndex);
  });

  nextButtonJeux.addEventListener('click', () => {
    const maxIndex = Math.max(sliderItemsJeux.length - slidesToShow, 0);
    currentIndex = Math.min(currentIndex + slidesToShow, maxIndex);
    slideTo(currentIndex);
  });

  sliderTrackJeux.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = -Math.sign(event.deltaX); // Inverser la direction du défilement
    currentIndex = Math.max(0, Math.min(currentIndex - delta, sliderItems.length - 1));
    slideTo(currentIndex);
  });
});











/*
document.addEventListener("DOMContentLoaded", function() {
  const filterSelect = document.getElementById("filterSelect");
  const contents = document.querySelectorAll(".content");

  filterSelect.addEventListener("change", function() {
      const selectedCategory = this.value;

      contents.forEach(content => {
          if (selectedCategory === "all" || content.classList.contains(selectedCategory)) {
              content.classList.remove("hidden");
          } else {
              content.classList.add("hidden");
          }
      });
  });
});

*/








/*filtre*/

var currentPage = 1;
var contentsPerPage = 4; // Nombre de contenus à afficher par page
var currentFilter = "all"; // Filtre actuel (par défaut : affiche tous les contenus)

$(document).ready(function() {
  // Affiche tous les contenus au chargement de la page
  showContent(currentFilter);
});
function showContent(filter) {
  currentFilter = filter;

  var contents = $(".content");
  contents.removeClass("show");

  // Affiche les contenus correspondant au filtre actuel et à la page actuelle
  if (currentFilter === "all") {
    contents.slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  } else {
    contents.filter("." + currentFilter).slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  }

  // Réinitialise la pagination à la première page lorsque le filtre est changé
  currentPage = 1;
  updatePagination();
}

function changePage(direction) {
  currentPage += direction;
  showContent(currentFilter); // Appeler la fonction avec la catégorie actuelle
}


function updatePagination() {
  var contents = $(".content");
  var totalContents = contents.length;
  var totalPages = Math.ceil(totalContents / contentsPerPage);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  contents.removeClass("show");
  if (currentFilter === "all") {
    contents.slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  } else {
    contents.filter("." + currentFilter).slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  }

  document.getElementById("currentPage").innerText = currentPage;
}


// Gestion des filtres
$(".filter-btn").click(function() {
  var filter = $(this).attr("data-filter");
  showContent(filter);
});


//----------------------




//LE BOUTON VOIR PLUS ------------------
/*
var categoriesToHide = 7; // Nombre de catégories à cacher par défaut
var isExpanded = false;
var seeMoreBtn = document.getElementById("seeMoreBtn");
var categories = document.getElementsByClassName("category");

// Cacher les catégories supplémentaires par défaut
for (var i = categoriesToHide; i < categories.length; i++) {
  categories[i].classList.add("hidden");
}

seeMoreBtn.addEventListener("click", function() {
  if (isExpanded) {
    // Cacher les catégories supplémentaires
    for (var i = categoriesToHide; i < categories.length; i++) {
      categories[i].classList.add("hidden");
    }
    seeMoreBtn.textContent = "Voir Plus";
  } else {
    // Afficher toutes les catégories
    for (var i = 0; i < categories.length; i++) {
      categories[i].classList.remove("hidden");
    }
    seeMoreBtn.textContent = "Voir Moins";
  }
  isExpanded = !isExpanded;
});*/


//----------FIN BOUTON VOIR PLUS -----------------------





function changeColor(button) {
  // Supprime la classe "active" de tous les boutons de filtre
  $(".filter-btn").removeClass("active");

  // Ajoute la classe "active" au bouton cliqué
  $(button).addClass("active");
}



//--------DIV QUI SE GRISE A DATE PRECISE  ----------------

document.addEventListener('DOMContentLoaded', function() {
  function verifierDateDePeremption() {
      const dateActuelle = new Date();
      const elements = document.querySelectorAll('.content');

      elements.forEach(element => {
          const expirationDate = new Date(element.getAttribute('data-expiration'));

          if (dateActuelle > expirationDate) {
              element.classList.add('expired'); // Ajoute la classe si la date est dépassée
          } else {
              element.classList.remove('expired'); // Retire la classe si la date n'est pas dépassée
          }
      });
  }

  // Vérifie la date de péremption toutes les secondes
  setInterval(verifierDateDePeremption, 1000);

  // Appel initial de la fonction
  verifierDateDePeremption();

  /*Compte à rebours de fin d'offre*/
  function verifierDateDePeremption2() {
      // Le reste de votre code pour le compte à rebours...
  }

  setInterval(verifierDateDePeremption2, 1000);
  verifierDateDePeremption2(); // Appel initial du compte à rebours
});


//------------------------------------------------------------------------


/*Compte a rebourd de fin d'offre*/
function verifierDateDePeremption2() {
  const dateActuelle = new Date();
  const elements = document.querySelectorAll('.content');

  elements.forEach(element => {
    const expirationDate = new Date(element.getAttribute('data-expiration'));
    const difference = expirationDate - dateActuelle;

    if (difference <= 0) {
      element.querySelector('.date-end').textContent = 'Expiré';
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const icon = document.createElement('i');
      icon.classList.add('fa-solid', 'fa-hourglass-end');

      const timeText = document.createElement('span');
      if (days >= 2) {
        timeText.textContent = days + ' jours';
      } else if (days === 1) {
        if (hours >= 1) {
          timeText.textContent = '1 jour ' + hours + ' heures ' + minutes + ' minutes';
        } else {
          if (minutes > 0) {
            timeText.textContent = '1 jour ' + minutes + ' minutes';
          } else {
            timeText.textContent = '1 jour ' + seconds + ' secondes'; // Affichage des secondes uniquement dans la dernière minute
          }
        }
      } else if (hours > 0) {
        timeText.textContent = hours + ' heures ' + minutes + ' minutes';
      } else {
        if (minutes > 0) {
          timeText.textContent = minutes + ' minutes';
        } else {
          timeText.textContent = seconds + ' secondes'; // Affichage des secondes uniquement dans la dernière minute
        }
      }

      const dateEnd = element.querySelector('.date-end');
      dateEnd.textContent = '';
      dateEnd.appendChild(icon);
      dateEnd.appendChild(document.createTextNode(' '));
      dateEnd.appendChild(timeText);
    }
  });
}

setInterval(verifierDateDePeremption2, 1000);
window.onload = verifierDateDePeremption2;


//----------------------------------------------------------------------








//Chaque moi faire une recherche de l'année et du moi et supprimer tout ce qui n'

//-------------------------------------------





/*--------------DIV qui disparait au bout d'un certain temps-----------*/
/*-----------------------------------------------------*/

/*

        // Date à partir de laquelle vous souhaitez supprimer la div (au format AAAA-MM-JJ HH:MM:SS)
        const dateDeSuppression = '2023-10-09 17:27:59'; // Ajoutez l'heure, la minute et la seconde

        // Fonction pour vérifier et supprimer la div si la date est dépassée
        function verifierDateDeSuppression() {
            const dateActuelle = new Date();
            const dateSuppression = new Date(dateDeSuppression);

            // Comparer les dates
            if (dateActuelle > dateSuppression) {
                // Sélectionnez la div que vous souhaitez supprimer
                const maDiv = document.getElementById('maDiv');

                // Supprimez la div de manière permanente
                maDiv.remove();
            }
        }

        // Vérifiez la date de suppression toutes les secondes
        setInterval(verifierDateDeSuppression, 1000);

        // VOIR CHATGPT POUR VERSION UNIVERSELLE */



 //       FONCTION QUI PERMET DE SUPPRIMER LES DIV LORSQU'ELLES ONT ATTEINT LA DATE DE PEREMPTION
/*
 function supprimerDivSiDateDepassee(dateDeSuppression, divId) {
  function verifierDateDeSuppression() {
    const dateActuelle = new Date();
    const dateSuppression = new Date(dateDeSuppression);

    if (dateActuelle > dateSuppression) {
      const maDiv = document.getElementById(divId);
      if (maDiv) {
        maDiv.classList.add("removed"); // Ajoutez la classe "removed"
        maDiv.remove();
      }
    }
  }

  // Vérifiez la date de suppression toutes les secondes
  setInterval(verifierDateDeSuppression, 100);
}

// Utilisation :
//supprimerDivSiDateDepassee('2023-11-09 21:09:59', 'maDiv');
//supprimerDivSiDateDepassee('2023-12-09 21:10:10', 'autreDiv');
//supprimerDivSiDateDepassee('2023-12-23 09:00:00', 'overwatch');
//supprimerDivSiDateDepassee('2023-12-07 18:59:00', 'warzone-cauchemars');


// AJOUTER LA MEME CONSTANTE AVEC UN ID DIFFERENT CHANGER maDiv et changer date et ca fonctionnera 
//Ajouter la Div differente sur la div 
*/







const plateformeButtons = document.querySelectorAll('.filter-btn-plate');
const filterButtons = document.querySelectorAll('.filter-btn');
const filterElements = document.querySelectorAll('.content');

let activeFilters = []; // Tableau pour les filtres actifs

// Fonction pour filtrer les éléments en fonction des filtres actifs
function filterContent() {
  filterElements.forEach(element => {
    const elementFilters = element.getAttribute('data-filter').split(' ');
    const matchesFilters = activeFilters.every(filter => elementFilters.includes(filter));
    element.style.display = matchesFilters ? 'block' : 'none';
  });
}

// Ajoutez un gestionnaire d'événements aux boutons de filtre de la div .plateforme
plateformeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const filterValue = this.getAttribute('data-filter');
    const isActive = this.classList.contains('active');

    if (isActive) {
      this.classList.remove('active'); // Désactivez le bouton
      // Désactivez le filtre dans les filtres actifs
      activeFilters = activeFilters.filter(filter => filter !== filterValue);
    } else {
      this.classList.add('active'); // Activez le bouton
      // Ajoutez le filtre aux filtres actifs
      activeFilters.push(filterValue);
    }

    // Filtrer les éléments en fonction des filtres actifs
    filterContent();
  });
});

// Ajoutez un gestionnaire d'événements aux boutons de filtre de la div .filters
filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    const filterValue = this.getAttribute('data-filter');
    const isActive = this.classList.contains('active');

    if (isActive) {
      this.classList.remove('active'); // Désactivez le bouton
      // Désactivez le filtre dans les filtres actifs
      activeFilters = activeFilters.filter(filter => filter !== filterValue);
    } else {
      this.classList.add('active'); // Activez le bouton
      // Ajoutez le filtre aux filtres actifs
      activeFilters.push(filterValue);
    }

    // Filtrer les éléments en fonction des filtres actifs
    filterContent();
  });
});




//DISNTINCTION SUR LE BOUTTON SELECTIONNER


// Sélectionnez les boutons de filtre dans la div "plateforme"
const plateformeFilterButtons = document.querySelectorAll('.plateforme .filter-btn');

// Sélectionnez les boutons de filtre dans la div "filters"
const filtersFilterButtons = document.querySelectorAll('.filters .filter-btn');

// Ajoutez un gestionnaire d'événements à chaque bouton de filtre dans la div "plateforme"
plateformeFilterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Réinitialisez la classe "active" de tous les boutons dans la div "plateforme"
        plateformeFilterButtons.forEach(btn => btn.classList.remove('active'));
        filtersFilterButtons.forEach(btn => btn.classList.remove('active')); // Réinitialisez également les boutons dans la div "filters"
        this.classList.add('active'); // Activez le bouton actuel
    });
});

// Ajoutez un gestionnaire d'événements à chaque bouton de filtre dans la div "filters"
filtersFilterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Réinitialisez la classe "active" de tous les boutons dans la div "filters"
        filtersFilterButtons.forEach(btn => btn.classList.remove('active'));
        plateformeFilterButtons.forEach(btn => btn.classList.remove('active')); // Réinitialisez également les boutons dans la div "plateforme"
        this.classList.add('active'); // Activez le bouton actuel
    });
});





/*POUR AVOIR TOUJOURS LE BOUTON TOUT DE LA DIV FITERS ACTIVER PEUT IMPORTE QUELLE BOUTON DE LA DIV PLATEFORME EST CHOISI*/
// Sélectionnez les boutons de filtre de la div "plateforme"
const filterButtonsPlateforme = document.querySelectorAll('.filter-btn');
const filterButtonFilterAll = document.querySelector('.filters .filter-btn[data-filter="all"]');

// Ajoutez un gestionnaire d'événements à chaque bouton de filtre de la div "plateforme"
filterButtonsPlateforme.forEach(button => {
    button.addEventListener('click', function () {
        // Réinitialisez la classe "active" de tous les boutons de la div "plateforme"
        filterButtonsPlateforme.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active'); // Activez le bouton actuel

        // Activez également le bouton "Tout" de la div "filter"
        filterButtonFilterAll.classList.add('active');

        // ... (le reste de votre logique de filtre)
    });
});




/* CODE POUR ENLEVER LE BORDER BOTTOM DU BOUTON TOUT DIV FILTER*/
// Sélectionnez les boutons de filtre de la div "filter"
const filterButtonsFilter = document.querySelectorAll('.filters .filter-btn');

// Ajoutez un gestionnaire d'événements à chaque bouton de filtre de la div "filter"
filterButtonsFilter.forEach(button => {
    button.addEventListener('click', function () {
        // Réinitialisez la classe "active" de tous les boutons de la div "filter"
        filterButtonsFilter.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active'); // Activez le bouton actuel

        // Réinitialisez également le style du bouton "Tout" de la div "filter"
        filterButtonFilterAll.style.borderBottom = ''; // Réinitialisez le style du bord inférieur

        // ... (le reste de votre logique de filtre)
    });
});




// Sélectionnez le bouton "Tout" de la div "filter" et ajoutez-lui la classe "active"
const filterPlatFilterAll = document.querySelector('.filters .filter-btn[data-filter="all"]');
filterBPlatFilterAll.classList.add('active');




// Sélectionnez les boutons de la div "plateforme"
const platformButtons = document.querySelectorAll('.plateforme button');

platformButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Réinitialisez la classe "active" de tous les boutons de la div "platforme"
        platformButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active'); // Activez le bouton actuel

        // Activez tous les boutons de la div "filter" liés (classe "linked")
        const filterButtonsLinked = document.querySelectorAll('.filters .linked');
        filterButtonsLinked.forEach(filterButton => {
            filterButton.classList.add('active');
        });
    });
});





/* AVOIR LE CONTOUR DANS LA DIV PLATEFORME QUI RESTE LORSQU'on clique sur un boutton de la div filter ensuite*/

const platformPlate = document.querySelectorAll('.plateforme button');
const filterPlate = document.querySelectorAll('.filters button');


filterPlate.forEach(button => {
  button.addEventListener('click', function () {
      // Désactivez la classe "active" de tous les boutons de la div "filter"
      filterPlate.forEach(btn => btn.classList.remove('active'));
      // Activez le bouton actuel de la div "filter"
      this.classList.add('active');

      // Maintenez la classe "active" du bouton de la div "plateforme
      const activeplatformPlate = document.querySelector('.plateforme .active');
      activeplatformPlate.classList.add('active');
  });
});












// LES FILTRES OPTION SUPPLEMENTAIRES POUR LA DIV PLATEFORME 

//function changeColor(button) {
  //const buttons = document.querySelectorAll('.filter-btn-plate');
 // buttons.forEach((btn) => {
      // Réinitialise tous les boutons
   //   btn.classList.remove('active');
//  });

  // Active le bouton cliqué
 // button.classList.add('active');

  // Placez ici le reste du code pour le traitement du clic
  // ...
//}






// CODE POUR LE SLIDER ---------------------------

/* SLIDER CATEGORIE TOP PAGE*/
document.addEventListener('DOMContentLoaded', function() {
  const sliderTrack = document.querySelector('.slider-track');
  const sliderItems = document.querySelectorAll('.slider-item');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');

  let currentIndex = 0;
  const slidesToShow = 2; // Nombre de slides à afficher à la fois

  const slideWidth = sliderItems[0].clientWidth;

  function slideTo(index) {
    currentIndex = index;
    sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - slidesToShow, 0);
    slideTo(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    const maxIndex = Math.max(sliderItems.length - slidesToShow, 0);
    currentIndex = Math.min(currentIndex + slidesToShow, maxIndex);
    slideTo(currentIndex);
  });

  sliderTrack.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = -Math.sign(event.deltaX); // Inverser la direction du défilement
    currentIndex = Math.max(0, Math.min(currentIndex - delta, sliderItems.length - 1));
    slideTo(currentIndex);
  });
});

//-------------------------------------------------


//CODE POUR PAGINATION ---------------------


var currentPage = 1;
var contentsPerPage = 2; // Nombre de contenus à afficher par page
var currentFilter = "all"; // Filtre actuel (par défaut : affiche tous les contenus)

$(document).ready(function() {
  // Affiche tous les contenus au chargement de la page
  showContent(currentFilter);
});

function showContent(filter) {
  currentFilter = filter;

  var contents = $(".content");
  contents.removeClass("show");

  // Affiche les contenus correspondant au filtre actuel
  if (currentFilter === "all") {
    contents.slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  } else {
    contents.filter("." + currentFilter).slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  }

  // Réinitialise la pagination à la première page lorsque le filtre est changé
  currentPage = 1;
  updatePagination();
}

function changePage(direction) {
  currentPage += direction;
  updatePagination();
}

function updatePagination() {
  var contents = $(".content");
  var totalContents = contents.length;
  var totalPages = Math.ceil(totalContents / contentsPerPage);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  contents.removeClass("show");
  if (currentFilter === "all") {
    contents.slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  } else {
    contents.filter("." + currentFilter).slice((currentPage - 1) * contentsPerPage, currentPage * contentsPerPage).addClass("show");
  }

  document.getElementById("currentPage").innerText = currentPage;
}





//--------------------------





//-----------------------------------------------------



//TOGGLE DU MENU DEROULANT NAV UNIVERS

const toggleButtonNavUnivers = document.querySelector(".toggle-button-nav-univers");
const dropdownContentNavUnivers = document.querySelector(".dropdown-content-nav-univers");

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
toggleButtonNavUnivers.addEventListener("click", function () {
  // Vérifiez si le menu est visible
  const isMenuVisible = dropdownContentNavUnivers.classList.contains("disable");

  // Si le menu est visible, masquez-le, sinon affichez-le
  if (isMenuVisible) {
    dropdownContentNavUnivers.classList.remove("disable");
  } else {
    dropdownContentNavUnivers.classList.add("disable");
  }
});

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton pour fermer le menu déroulant
toggleButtonNavUnivers.addEventListener("click", function (event) {
  dropdownContentNavUnivers.classList.add("disable");
});
