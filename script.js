// variables assigned to access elements in HTML document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// function to check the value in the number input element
const checkUserInput = () => {
  // It would be helpful to alert users if they don't enter a value into the number input, or the number they enter is invalid. While the input type="number" element makes validation easier by only allowing numbers and some special characters, remember that all values you get from HTML elements are actually strings. Also, if the number input is empty, the value property will be an empty string.
  /* (removed) if (numberInput.value === "") {
    // if users don't enter a value into the number input
  } */
  // In an earlier project you learned about truthy and falsy values, which are values that evaluate to true or false. In JavaScript, some common falsy values you'll see are null, undefined, the number 0, and empty strings.
  // Rather than check if a value is equal to a falsy value, you can use the logical NOT operator (!) to check if the value itself is falsy.
  // Because the input type="number" element allows special characters like ., +, and e, users can input floats like 2.2, equations like 2e+3, or even just e, which you don't want to allow.
  // A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number
  // Next, you need to check if the value returned by the parseInt() function is a number or not.
  // To do that, you can use the isNaN() function. This function takes in a string or number as an argument, and returns true if it evaluates to NaN
  if (
    !numberInput.value || // you can use the logical NOT operator (!) to check if the value itself is falsy.
    isNaN(parseInt(numberInput.value)) || // remember that all values you get from HTML elements are actually strings // parseInt() function takes a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number // isNaN() to check if the value returned by the parseInt() function is a number or not.
    parseInt(numberInput.value) < 0 // we are considering only positive numbers
  ) {
    // if the user doesn't enter a number, or the number is invalid or the number is negative.
    window.alert("Please provide a decimal number greater than or equal to 0"); // alert the user
    return; // to break out of this function early. This will prevent future code in this function from running.
  }

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
