var mapButton = document.querySelector(".map__button");
var mapPopUp = document.querySelector(".map__popup");
var mapClose = mapPopUp.querySelector(".map__close");

mapButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.add("map__show");
});

mapClose.addEventListener("click", function(evt) {
  	evt.preventDefault();
  	mapPopUp.classList.remove("map__show");
})