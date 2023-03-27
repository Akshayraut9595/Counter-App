const contValue = document.querySelector("#counter");

const increment = () => {
  // get the value from UI
  let value = parseInt(contValue.innerText);
  // Update the value
  value = value + 1;
  // Set the value into UI
  contValue.innerText = value;
};

const decrement = () => {
  // get the value from UI
  let value = parseInt(contValue.innerText);
  // Update the value
  value = value - 1;
  // Set the value into UI
  contValue.innerText = value;
};
