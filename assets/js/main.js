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
    desc: "Педагог английского языка На протяжении многих лет педагог осуществляет успешную подготовку не только обучающихся с 1 по 11 классы в рамках школьной программы.",
    img: "./assets/img/teams__1.webp",
    cat: "Английский Язык"
  },
  {
    id: 2,
    fio: "Рачинская Ольга Игоревна",
    desc: "Педагог дополнительного образования В 2013 году окончила АГУ по специальности «Иностранный язык»",
    img: "./assets/img/teams__22.webp",
    cat: "Английский Язык"
  },
  {
    id: 3,
    fio: "Бойдиэль София Мохамеденовна",
    desc: "Профиль подготовки - педагог английского и французского языков Победитель международного конкурса Релод и региональных олимпиад по французскому языку",
    img: "./assets/img/teams__7.webp",
    cat: "Английский Язык"
  },
  {
    id: 4,
    fio: "Савинова Елена Юрьевна",
    desc: "Учитель начальных классов Образование – высшее: Астраханский государственный педагогический институт им. С.М.Кирова , 1994 г.Астраханский государственный университет.",
    img: "./assets/img/teams__4.webp",
    cat: "Начальные классы"
  },
  {
    id: 5,
    fio: "Данилова Анна Владимировна",
    desc: "Учитель иностранного языка Диплом о высшем образовании с отличием (бакалавриат). 2015-2019 - Калмыцкий государственный университет им.Б.Б.",
    img: "./assets/img/teams__2.webp",
    cat: "Английский Язык"
  },
  {
    id: 6,
    fio: "Улюмджиева Гиляна Саналовна",
    desc: "Учитель иностранного языка Диплом о высшем образовании с отличием (бакалавриат). 2015-2019 - Калмыцкий государственный университет им.Б.Б.",
    img: "./assets/img/teams__6.webp",
    cat: "Английский Язык"
  },
  {
    id: 7,
    fio: "Секерина Марина Игоревна",
    desc: "Педагог по английскому языку Образование - высшее, Астраханский государственный университет, 2009 г. Магистратура по направлению — Педагогика, 2011 г.Педагогический стаж работы - 13 лет.",
    img: "./assets/img/teams__8.webp",
    cat: "Английский Язык"
  },
  {
    id: 8,
    fio: "Кораблева Елена Павловна",
    desc: "Педагог русского языка Образование – высшее: Астраханский педагогический институт, 2000г. Магистратура по направлению – Педагогическое образование, 2015г. Стаж работы по специальности – 15 лет.",
    img: "./assets/img/teams__5.webp",
    cat: "Английский Язык"
  },
  {
    id: 9 ,
    fio: "Карпова Полина Евгеньевна",
    desc: "",
    img: "./assets/img/teams__3.webp",
    cat: "Английский Язык"
  }
]

const teamsContent = document.querySelector(".teams__container");

const displayTeams = (filterTeams) => {
  teamsContent.innerHTML = filterTeams.map((teams) =>
    `
    <article class="teams__slider-card teams__slider-card-container grid">
      <div class="teams__slider-card-data">
        <h1 class="teams__slider-card-title">
          ${teams.fio}
        </h1>
        <p class="teams__slider-card-desc">
          ${teams.desc}
        </p>
      </div>
      <img class="teams__slider-card-img" src=${teams.img} />
    </article>
    `
  )
  .join("");
};

displayTeams(teams);