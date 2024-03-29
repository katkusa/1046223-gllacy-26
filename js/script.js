var link = document.querySelector(".user-info");
var popup = document.querySelector(".modal");
var area = popup.querySelector(".modal-content");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("[name=userfield-form]");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=user-mail]");
var message = popup.querySelector("[name=user-message]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  area.classList.add("modal-show-animation");
  username.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
popup.addEventListener("click", function (evt) {
  if (!evt.target.classList.contains('modal')) {
    return;
  }
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    area.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    area.classList.add("modal-error");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
