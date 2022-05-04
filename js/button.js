const btnNext = document.querySelector(".button");
const form = document.querySelector(".form");
const lable1 = document.querySelector("#women");
const lable2 = document.querySelector("#men");

lable1.addEventListener("click", () => {
  console.log(lable1.value);
  ChangeClassBtn();
});

lable2.addEventListener("click", () => {
  console.log(lable2.value);
  ChangeClassBtn();
});

function ChangeClassBtn(evt) {
  if (!lable1.values) {
    console.log(!lable1.values && !lable2.values);
    btnNext.classList.remove("visually-hidden");
  }
}

btnNext.addEventListener("click", () => {
  console.log("klick");
});

form.addEventListener("submit", onformSabmit);

function onformSabmit(event) {
  const formElements = event.currentTarget.elements;

  console.log(formElements.sex.value);
  event.preventDefault();
}
