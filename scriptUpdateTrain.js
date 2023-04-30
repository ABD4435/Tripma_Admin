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

const validationSourceDestination = (source,destination,errorSourceDestination) => {
  source.addEventListener("input",(event) => {
    if (source.value === "" && destination.value === "") {
      errorSourceDestination.style.display = "none";
    } else if (source.value == destination.value) {
      event.preventDefault();
      errorSourceDestination.style.display = "block";
    } else {
      errorSourceDestination.style.display = "none";
    }
  });

  destination.addEventListener("input",(event) => {
    if (source.value === "" && destination.value === "") {
      errorSourceDestination.style.display = "none";
    } else if (source.value == destination.value) {
      event.preventDefault();
      errorSourceDestination.style.display = "block";
    } else {
      errorSourceDestination.style.display = "none";
    }
  });
}

const validationDepartureArrival = (departure,arrival,errorDepartureArrival) => {
  departure.addEventListener("input",(event) => {
    if (departure.value === "" && arrival.value === "") {
      errorDepartureArrival.style.display = "none";
    } else if (departure.value == arrival.value) {
      event.preventDefault();
      errorDepartureArrival.style.display = "block";
      } else {
        errorDepartureArrival.style.display = "none";
        }
        });
    arrival.addEventListener("input",(event) => {
      event.preventDefault();
      if (departure.value === "" && arrival.value === "") {
        errorDepartureArrival.style.display = "none";
      } else if (departure.value == arrival.value) {
        event.preventDefault();
        errorDepartureArrival.style.display = "block";
        } else {
          errorDepartureArrival.style.display = "none";
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

//Validation for source
let source = document.getElementById("source");
let errorSource = document.getElementById("errorSource");
restrictLetterInput(source,errorSource);

//Validation for destination
let destination = document.getElementById("destination");
let errorDestination = document.getElementById("errorDestination");
restrictLetterInput(destination,errorDestination);

//Valiation for source and destination
let errorSourceDestination = document.getElementById("errorSourceDestination");
validationSourceDestination (source,destination,errorSourceDestination);

//Validation for departure and arrival time
let departure = document.getElementById("departure-time");
let arrival = document.getElementById("arrival-time");
let errorDepartureArrival = document.getElementById("errorDepartureArrival");
validationDepartureArrival(departure,arrival,errorDepartureArrival);