const year = document.querySelector(".year");
const month = document.querySelector(".month");
let result = document.querySelector(".result");
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const submit = document.querySelector(".button");

// Calculating the amount of days using user's input //
submit.addEventListener("click", function () {
  if (year.value === "" || month.value === "ENTER YOUR BIRTH MONTH") {
    result.textContent =
      "HMMM, LOOKS LIKE YOU FORGOT TO ENTER YOUR ANSWERS BELOW =)";
    result.style.visibility = "visible";
  } else if (year.value > currentYear) {
    result.textContent = "YOU FROM FUTURE OR WHAT? :0";
    result.style.visibility = "visible";
  } else if (month.value > currentMonth && Number(year.value) === currentYear) {
    result.textContent = "YOU FROM FUTURE OR WHAT? :00";
    result.style.visibility = "visible";
  } else if (currentMonth < month.value) {
    result.textContent = `YOU ARE ${Math.trunc(
      (currentYear - year.value) * 365.25 - (month.value - currentMonth) * 30
    )} DAYS OLD! FEELING OLD, DON'T YA? :D`;
    result.style.visibility = "visible";
  } else if (currentMonth > month.value) {
    result.textContent = `YOU ARE ${Math.trunc(
      (currentYear - year.value) * 365.25 + (currentMonth - month.value) * 30
    )} DAYS OLD! FEELING OLD, DON'T YA? :D`;
    result.style.visibility = "visible";
  } else {
    result.textContent = `YOU ARE ${Math.trunc(
      (currentYear - year.value) * 365.25
    )} DAYS OLD! FEELING OLD, DON'T YA? :D`;
    result.style.visibility = "visible";
  }
});

// Changing font color when inputs are not empty //
year.addEventListener("input", function () {
  if (year.value !== "") {
    year.style.color = "#000";
  }
});

month.addEventListener("input", function () {
  if (month.value !== "") {
    month.style.color = "#000";
  }
});
