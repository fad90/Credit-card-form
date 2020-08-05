jQuery(function ($) {
  $(".info__card-number").mask("9999 9999 9999 9999");
  $(".info__card-number").mask("9999 9999 9999 9999", { placeholder: " " });
  $(".info__input-cvv").mask("999");
  $(".info__input-cvv").mask("999", { placeholder: " " });
  $(".info__date-month").mask("99");
  $(".info__date-month").mask("99", { placeholder: " " });
  $(".info__date-year").mask("9999");
  $(".info__date-year").mask("9999", { placeholder: " " });
});

const paymentMethod = document.querySelectorAll(".payment__method");
const cardInfo = document.querySelectorAll(".info");

let index = 0;

const activeInfo = (n) => {
  for (info of cardInfo) {
    info.classList.remove("active");
  }
  cardInfo[n].classList.add("active");
};

const activeMethod = (n) => {
  for (method of paymentMethod) {
    method.classList.remove("active");
  }
  paymentMethod[n].classList.add("active");
};

paymentMethod.forEach((item, indexMethod) => {
  item.addEventListener("click", () => {
    index = indexMethod;
    activeMethod(index);
    activeInfo(index);
  });
});

const popup = document.querySelector(".popup"),
      popupBody = document.querySelector(".popup__body"),
      openTerms = document.querySelector(".term__text_highlighted"),
      closeTerms = document.querySelector(".popup__close");

const popupOpen = () => {
  popup.style.display = "block";
};

const popupClose = () => {
  popup.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == popupBody) {
    popup.style.display = "none";
  }
};

openTerms.addEventListener("click", popupOpen);
closeTerms.addEventListener("click", popupClose);


const inputName = document.querySelector('.info__input-name');

inputName.addEventListener('keyup', function(){
    this.value = this.value.replace(/[\d]/g, '');
});