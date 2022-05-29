const header = document.querySelector(".page-header");
const nav = document.querySelector(".page-header__nav");
const toggle = document.querySelector(".page-header__toggle");

header.classList.add("page-body__header--visible");
toggle.classList.add("page-header__toggle--visible");
header.classList.remove("page-header--opened");
header.classList.add("page-header--closed");
nav.classList.add("page-header__nav--closed");

let menuClosed = true;
toggle.addEventListener("click", function (event) {
  if (menuClosed) {
    nav.classList.add("page-header__nav--opened");
    nav.classList.remove("page-header__nav--closed");
    header.classList.add("page-header--opened");
    header.classList.remove("page-header--closed");
    menuClosed = false;
  } else {
    nav.classList.remove("page-header__nav--opened");
    nav.classList.add("page-header__nav--closed");
    header.classList.remove("page-header--opened");
    header.classList.add("page-header--closed");
    menuClosed = true;
  }
});

try {
  // Карта
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [59.938635, 30.323118],
      zoom: 15,
      controls: [],
    });

    myMap.geoObjects.add(
      new ymaps.Placemark(
        [59.938635, 30.323118],
        {
          iconCaption: "Большая Конюшенная улица, 19",
        },
        {
          preset: "islands#icon",
          iconColor: "red",
        }
      )
    );
  }
} catch (error) {
  console.log("TCL: error", error);
}
