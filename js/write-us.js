  var link = document.querySelector(".write__us-button");
  var writeUs = document.querySelector(".write__us");
  var writeClose = writeUs.querySelector(".write__close");
  var login = writeUs.querySelector("[name=yourname]");
  var form = writeUs.querySelector("form");
  var email = writeUs.querySelector("[name=email]");

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