const btnNext = document.querySelector(".button");
const mainContent = document.querySelector(".main-content");
const form = document.querySelector(".form");
const formProgres = document.querySelector(".form-progres");
const formQuestion = document.querySelector(".form-title");
const formAnsver = document.querySelector(".ansver-content");
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

// btnNext.addEventListener("click", () => {
//   console.log("klick");
// });

form.addEventListener("submit", onformSabmit);

function onformSabmit(event) {
  event.preventDefault();
  uncheckBoxes();
  btnNext.classList.add("visually-hidden");
  formProgres.classList.remove("visually-hidden");
  const formElements = event.currentTarget.elements;
  mainContent.classList.add("visually-hidden");
  formQuestion.textContent =
    "В какое время суток Вы чувствуете себя наиболее комфортно ? ";

  formAnsver.classList.remove("main-ansver-row");
  formAnsver.classList.add("main-ansver-column");
  console.log(formQuestion.textContent);
  console.log(formElements.sex.value);
}

function uncheckBoxes() {
  lable1.checked = false;
  lable2.checked = false;
}
