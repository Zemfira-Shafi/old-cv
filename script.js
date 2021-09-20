const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");
const list = document.querySelector(".header-list");
const body = document.querySelector(".wrapper");

function toggleNav () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
};
 function closeNav () {
     burger.classList.remove("active");
     nav.classList.remove("active");
     body.classList.remove("lock");
 };

 burger.addEventListener("click", toggleNav);
 list.addEventListener("click", closeNav);

 console.log('Score 150/150 \n 1) вёрстка валидная +10 \n 2) вёрстка семантическая +20 \n 3)для оформления СV используются css-стили +10 \n 4) контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 \n 5) вёрстка адаптивная +10 \n 6) есть адаптивное бургер-меню +10 \n 7) на странице СV присутствует изображение - фото, пропорции изображения не искажены, у изображения есть атрибут alt +10 \n 8) контакты для связи и перечень навыков оформлены в виде списка ul > li +10 \n 9) CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 \n 10) CV содержит пример кода +10 \n 11) CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10 \n 12) CV выполнено на английском языке +10 \n 13) выполнены требования к Pull Request +10 \n 14) дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10');
 