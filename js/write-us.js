  let link = document.querySelector(".write__us-button");
  let writeUs = document.querySelector(".write__us");
  let writeClose = writeUs.querySelector(".write__close");
  


  link.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	writeUs.classList.add("write__us-show")
  });

  writeClose.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	writeUs.classList.remove("write__us-show");  
  });