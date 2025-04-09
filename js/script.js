const myWhiteLamp = document.getElementById("white-lamp");
const myYellowLamp = document.getElementById("yellow-lamp");
const clickButton = document.getElementById("my-button");

console.log(myWhiteLamp);
console.log(myYellowLamp);
console.log(clickButton);

clickButton.addEventListener("click", function () {
  const yellowHidden = myYellowLamp.classList.contains("d-none");
  if (yellowHidden) {
    myYellowLamp.classList.replace("d-none", "d-block");
    myWhiteLamp.classList.replace("d-block", "d-none");
    clickButton.innerText = "Spegniti";
  } else {
    myYellowLamp.classList.replace("d-block", "d-none");
    myWhiteLamp.classList.replace("d-none", "d-block");
    clickButton.innerText = "Accenditi";
  }
});
