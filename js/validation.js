const form01 = document.querySelector(".intro-section__form");
const form02 = document.querySelector(".access-section__form");
const email01 = document.querySelector(".intro-section__form-email");
const email02 = document.querySelector(".access-section__form-email");

form01.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email01.value)) {
    document.querySelector(".intro-section__form-error").innerHTML = "";
  } else {
    document.querySelector(".intro-section__form-error").innerHTML =
      "Please enter a valid email";
  }
});

form02.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email02.value)) {
    document.querySelector(".access-section__form-error").innerHTML = "";
  } else {
    document.querySelector(".access-section__form-error").innerHTML =
      "Please enter a valid email";
  }
});
