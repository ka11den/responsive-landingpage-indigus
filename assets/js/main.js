// header
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('snow-menu');
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('snow-menu');
  })
}

// scroll
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}

// slider
const carousel = document.querySelector(".advantages__slider-data");
const firstImg = carousel.querySelectorAll("article")[0];
const arrowIcons = document.querySelectorAll(".advantages__slider i");

let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

const showHideIcons = () => {

  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {

  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;

    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

    setTimeout(() => showHideIcons(), 60);
  });
});

const dragStart = (e) => {

  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {

  if(!isDragStart) return;

  e.preventDefault();
  
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;

  showHideIcons();
}

const dragStop = () => {

  isDragStart = false;
  carousel.classList.remove("dragging");

  if(!isDragging) return;
  isDragging = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// teams
const teams = [
  {
    id: 1,
    fio: "Степанова Татьяна Юрьевна",
    desc: "",
    img: "./assets/img/teams__1.png",
    cat: "Английский Язык"
  },
  {
    id: 2,
    fio: "Рачинская Ольга Игоревна",
    desc: "",
    img: "./assets/img/teams__22.png",
    cat: "Английский Язык"
  },
  {
    id: 3,
    fio: "Бойдиэль София Мохамеденовна",
    desc: "",
    img: "./assets/img/teams__7.jpg",
    cat: "Английский Язык"
  },
  {
    id: 4,
    fio: "Савинова Елена Юрьевна",
    desc: "",
    img: "./assets/img/teams__4.jpg",
    cat: "Начальные классы"
  },
  {
    id: 5,
    fio: "Данилова Анна Владимировна",
    desc: "",
    img: "./assets/img/teams__2.jpg",
    cat: "Английский Язык"
  },
  {
    id: 6,
    fio: "Улюмджиева Гиляна Саналовна",
    desc: "",
    img: "./assets/img/teams__6.jpg",
    cat: "Английский Язык"
  },
  {
    id: 7,
    fio: "Секерина Марина Игоревна",
    desc: "",
    img: "./assets/img/teams__8.jpg",
    cat: "Английский Язык"
  },
  {
    id: 8,
    fio: "Кораблева Елена Павловна",
    desc: "",
    img: "./assets/img/teams__5.jpg",
    cat: "Английский Язык"
  },
  {
    id: 9 ,
    fio: "Карпова Полина Евгеньевна",
    desc: "",
    img: "./assets/img/teams__3.jpg",
    cat: "Английский Язык"
  }
]

const teamsContent = document.querySelector(".teams__slider-content");
const teamsCat = document.querySelector(".teams__list");

const displayTeams = (filterTeams) => {
  teamsContent.innerHTML = filterTeams.map
  (
    (teams) =>
      `
        <article class="teams__slider-card teams__slider-card-container container grid">
          <div class="teams__slider-card-data">
            <h1 class="teams__slider-card-title">
              ${teams.fio}
            </h1>
            <p class="teams__slider-card-desc">
              Педагог английского языка. На протяжении многих лет педагог осуществляет успешную обучающихся с 1 по 11 классы в рамках школьной программы. 
            </p>
          </div>
          <img class="teams__slider-card-img" src=${teams.img} />
        </article>
      `
    )
    .join("");
};

const setCategories = () => {
  const allCats = teams.map((item) => item.cat);
  const categories = [
    "Все",

    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  teamsCat.innerHTML = categories
    .map
    (
      (cat) =>
        `
          <li class="teams__item">
            <a class="teams__link">${cat}</a>
          </li>
        `
    )
    .join("");

    teamsCat.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "Все"
      ? displayTeams(teams)
      : displayTeams(teams.filter((item) => item.cat === selectedCat));
  });
};

setCategories()
displayTeams(teams);
window.addEventListener('scroll', scrollActive)