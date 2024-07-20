// variables assigned to access elements in HTML document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// function to check the value in the number input element
const checkUserInput = () => {
  // A good way to test that everything is working is to log the value attribute of numberInput to the console. As a reminder, you can access the value attribute of an element by using dot or bracket notation.
  console.log(numberInput.value); // to log the value of numberInput to the console.
};

// event listener to call the checkUserInput function when users click the Convert button.
convertBtn.addEventListener("click", checkUserInput); // Remember that function references are not called with parentheses.

// event listener to call the checkUserInput function when users press the Enter / Return key.
numberInput.addEventListener("keydown", (e) => {
  // The keydown event fires every time a user presses a key on their keyboard
  // Remember that "e" is a common parameter name for the event object
  // (removed) console.log(e); // to log e to the console
  // If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.
  // Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.
  // Note: Since the Enter and Return keys have similar functions, they both have the same string value of "Enter".
  if (e.key === "Enter") {
    // if you press the Enter / Return key
    checkUserInput(); // call the checkUserInput function
  }
});
