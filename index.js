"use strick";

const oneDayInterest = (interest) => Math.pow(interest / 100 + 1, 3) - 1;

const oneYearAPY = (rebase) => Math.pow(rebase / 100 + 1, 1095) * 100;

const moreDaysInterest = (interest, days) =>
  Math.pow(oneDayInterest(interest) + 1, days) - 1;

const final = (interest, investment, days) =>
  investment + investment * moreDaysInterest(interest, days);

// APP

// DECLARATIONS
let romePrice = parseFloat(document.querySelector(".RomePrice").textContent);
let APY = parseFloat(
  document.querySelector(".APY").textContent.replaceAll(",", "")
);
let Balance = parseFloat(document.querySelector(".Balance").textContent);
let rebase = parseFloat(document.querySelector(".rebase").textContent);

// INITIALIZATIONS
document.querySelector(".Investment").textContent =
  "$" + (Balance * romePrice).toFixed(3);
let trueRebase = (document.querySelector(".rebase").textContent = (
  (Math.pow(APY / 100, 1 / 1095) - 1) *
  100
).toFixed(3));
document.querySelector(".Rewards").textContent =
  (Balance + Balance * oneDayInterest(trueRebase)).toFixed(3) + " ROME";
document.querySelector(".Return").textContent =
  "$" +
  ((Balance + Balance * oneDayInterest(trueRebase)) * romePrice).toFixed(3);

// PRINT VALUES
const getValue = function (days) {
  const numOfDays = (document.querySelector(".days").textContent =
    days + " Days");

  document.querySelector(".Investment").innerHTML = "";
  const invHTML = `<span class="Investment">$${(Balance * romePrice).toFixed(
    3
  )}</span>`;
  document
    .querySelector(".Investment")
    .insertAdjacentHTML("afterbegin", invHTML);

  document.querySelector(".Rewards").innerHTML = "";
  const Rewards = final(trueRebase, Balance, days);
  const ROMEhtml = `<span class="Rewards">${Rewards.toFixed(3)} ROME</span>`;
  document.querySelector(".Rewards").insertAdjacentHTML("afterbegin", ROMEhtml);

  document.querySelector(".Return").innerHTML = "";
  const ReturnHTML = `<span class="Return">$${(Rewards * romePrice).toFixed(
    3
  )}</span>`;
  document
    .querySelector(".Return")
    .insertAdjacentHTML("afterbegin", ReturnHTML);
};
