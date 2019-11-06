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

var link = document.querySelector(".write__us-button");
var writeUs = document.querySelector(".write__us");
var writeClose = writeUs.querySelector(".write__close");
var login = writeUs.querySelector("[name=yourname]");
var form = writeUs.querySelector("form");
var email = writeUs.querySelector("[name=email]");
var writeButton = writeUs.querySelector(".write__button");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUs.classList.add("write__us-show");
	login.focus();
});

writeClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUs.classList.remove("write__us-show");  
	writeUs.classList.remove("write__us-error");
});

writeButton.addEventListener("click", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      writeUs.classList.remove("write__us-error");
      writeUs.offsetWidth = writeUs.offsetWidth;
      writeUs.classList.add("write__us-error");
      if (!login.value) {
      	login.classList.add("invalid");
      }
      if (!email.value) {
      	email.classList.add("invalid");
      }
}});

login.addEventListener("input", function (evt) {
	if (login.value) {
		login.classList.remove("invalid");
	}
});

email.addEventListener("input", function (evt) {
	if (email.value) {
		email.classList.remove("invalid");
	}
});