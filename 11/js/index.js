const header=document.querySelector(".page-header"),nav=document.querySelector(".page-header__nav"),toggle=document.querySelector(".page-header__toggle");let menuClosed=!0;toggle.addEventListener("click",(function(e){menuClosed?(nav.classList.add("page-header__nav--opened"),nav.classList.remove("page-header__nav--closed"),header.classList.add("page-header--opened"),header.classList.remove("page-header--closed"),menuClosed=!1):(nav.classList.remove("page-header__nav--opened"),nav.classList.add("page-header__nav--closed"),header.classList.remove("page-header--opened"),header.classList.add("page-header--closed"),menuClosed=!0)}));try{function init(){new ymaps.Map("map",{center:[59.938635,30.323118],zoom:15,controls:[]}).geoObjects.add(new ymaps.Placemark([59.938635,30.323118],{iconCaption:"Большая Конюшенная улица, 19"},{preset:"islands#icon",iconColor:"red"}))}ymaps.ready(init)}catch(e){console.log("TCL: error",e)}