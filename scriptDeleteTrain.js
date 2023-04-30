//Validation of Input Fields
const restrictNumInput = (inputField, error) => {
  inputField.addEventListener("input", (event) => {
    let value = event.target.value.trim();
    let isEmpty = value.length === 0;
    let isNumeric = /^\d+$/.test(value);

    if (!isEmpty && !isNumeric) {
      event.preventDefault();
      error.style.display = "block";
  } else {
      error.style.display = "none";
  }
  });
};

const restrictLetterInput = (inputField, error) => {
  inputField.addEventListener("input", (event) => {
    let value = event.target.value.trim();
    let isEmpty = value.length === 0;
    let isLetter = /^[a-zA-Z\- ]+$/.test(value);

    if(!isEmpty && !isLetter) {
      event.preventDefault();
      error.style.display = "block";
    } else {
      error.style.display = "none";
    }
  });
}

//Validation for train number
let trainNumber = document.getElementById("train-number");
let errorNumOnly = document.getElementById("errorNumOnly");
restrictNumInput(trainNumber,errorNumOnly);

//Validation for train name
let trainName = document.getElementById("train-name");
let errorLetterOnly = document.getElementById("errorLetterOnly");
restrictLetterInput(trainName,errorLetterOnly);