const year = document.querySelector(".year");
const month = document.querySelector(".month");
let result = document.querySelector(".result");
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const submit = document.querySelector(".button");

// Calculating the amount of days using user's input //
submit.addEventListener("click", function () {
  if (year.value === "" || month.value === "ENTER YOUR BIRTH MONTH") {
    result.innerHTML = "WHERE ARE YOUR ANSWERS? DID THEY JOIN THE CIRCUS?";
  } else if (year.value > currentYear) {
    result.innerHTML = "YOU FROM FUTURE OR WHAT? :0";
  } else if (month.value > currentMonth && Number(year.value) === currentYear) {
    result.innerHTML = "YOU FROM FUTURE OR WHAT? :00";
  } else if (currentMonth < month.value) {
    result.innerHTML = `WOWZA, YOU'VE BEEN AROUND FOR A WHOPPING <span class="highlight">${Math.trunc(
      (currentYear - year.value) * 365.25 - (month.value - currentMonth) * 30
    )} DAYS!</span> FEELING LIKE A WISE OLD OWL YET? :D`;
  } else if (currentMonth > month.value) {
    result.innerHTML = `WOWZA, YOU'VE BEEN AROUND FOR A WHOPPING <span class="highlight">${Math.trunc(
      (currentYear - year.value) * 365.25 + (currentMonth - month.value) * 30
    )} DAYS!</span> FEELING LIKE A WISE OLD OWL YET? :D`;
  } else {
    result.innerHTML = `WOWZA, YOU'VE BEEN AROUND FOR A WHOPPING <span class="highlight">${Math.trunc(
      (currentYear - year.value) * 365.25
    )} DAYS!</span> FEELING LIKE A WISE OLD OWL YET? :D`;
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
