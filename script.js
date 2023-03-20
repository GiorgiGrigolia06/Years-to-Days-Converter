const year = document.querySelector(".year");
const month = document.querySelector(".month");
let result = document.querySelector(".result");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

const submit = document.querySelector(".button");

// year.addEventListener("input", function () {
//   result.textContent = `${year.value * 365} days`;
// });

submit.addEventListener("click", function () {
  if (currentMonth < month.value) {
    result.textContent = `You're ${Math.trunc(
      (currentYear - year.value) * 365.25 - (month.value - currentMonth) * 30
    )} years old.`;
  } else if (currentMonth > month.value) {
    result.textContent = `You're ${Math.trunc(
      (currentYear - year.value) * 365.25 + (currentMonth - month.value) * 30
    )} days old.`;
  } else {
    result.textContent = `You're ${Math.trunc(
      (currentYear - year.value) * 365.25
    )} days old.`;
  }
});
