// variables assigned to access elements in HTML document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// function to do the decimal to binary conversion.
const decimalToBinary = (input) => {
  // it's time to finish building the function to do the conversion for you. You'll start off with a simpler solution first, then refactor that into a recursive solution.
  // First, you need to create some arrays to store the inputs and results of the division you'll do in the following steps. These will make it easier to see how the decimal to binary conversion works.
  const inputs = [];
  const quotients = [];
  const remainders = [];

  // Your decimalToBinary function works well, but there is an issue – because of the condition in your while loop, it only works for numbers greater than 0. If you try to convert 0 to binary, nothing will get added to the page.
  if (input === 0) {
    result.innerText = "0"; // // print the result on the screen
    return;
  }

  // For the decimal to binary conversion, you need to divide input by 2 until the quotient, or the result of dividing two numbers, is 0. But since you don't know how many times you need to divide input by 2, you can use a while loop to run a block of code as long as input is greater than 0 and can be divided.
  // As a reminder, a while loop is used to run a block of code as long as the condition evaluates to true, and the condition is checked before the code block is executed.
  // The tricky part about while loops is that, if you're not careful, they can run forever. This is called an infinite loop, and can cause your browser to crash.
  // To avoid infinite loops, you need to make sure that the condition for the while loop eventually becomes false. In this case, you want to make sure that the input variable eventually becomes 0.

  // while loop to run a block of code as long as input is greater than 0 and can be divided.
  while (input > 0) {
    const quotient = Math.floor(input / 2); // "input" is the dividend, or the number to be divided, and 2 is the divisor, or the number to divide by. The result, is called the quotient. // division can lead to a floating point number, or a number with a decimal point. The best way to handle this is to round down to the nearest whole number. // Math.floor() function to round down the quotient of input divided by 2 before it's assigned to quotient.

    const remainder = input % 2; // to calculate the remainder of input divided by 2. You can do this by using the remainder operator (%), which returns the remainder of the division of two numbers

    // This will help you get a better idea of how the conversion works later when you log the contents of your arrays to the console.
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    // (removed) input = 0; // This will make it so that the loop will only run up to one time. // Now that you have an operation that will lower the value of input each time the loop runs, you don't have to worry about the loop running forever. // Update the last line of your while loop and assign quotient to input.
    input = quotient;
  }

  // Now's a good time to check your work.
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  /* Now if you enter in the number 6 and click the Convert button, you'll see the following output:
  Example Code
  Inputs:  [ 6, 3, 1 ]
  Quotients:  [ 3, 1, 0 ]
  Remainders:  [ 0, 1, 1 ]
  Notice that the remainders array is the binary representation of the number 6, but in reverse order. */

  // print the result on the screen
  result.innerText = remainders.reverse().join(""); // .reverse() method to reverse the order of the remainders array, and .join() with an empty string as a separator to join the elements into a binary number string
};

// function to check if the number input is empty, the value is not a number or the number is negative.
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

  // if the user doesn't enter a number, or the number is invalid or the number is negative.
  if (
    !numberInput.value || // you can use the logical NOT operator (!) to check if the value itself is falsy.
    isNaN(parseInt(numberInput.value)) || // remember that all values you get from HTML elements are actually strings // parseInt() function takes a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number // isNaN() to check if the value returned by the parseInt() function is a number or not.
    parseInt(numberInput.value) < 0 // we are considering only positive numbers
  ) {
    window.alert("Please provide a decimal number greater than or equal to 0"); // alert the user
    return; // to break out of this function early. This will prevent future code in this function from running.
  }

  // A good way to test that everything is working is to log the value attribute of numberInput to the console. As a reminder, you can access the value attribute of an element by using dot or bracket notation.
  // (removed) console.log(numberInput.value); // to log the value of numberInput to the console.

  decimalToBinary(parseInt(numberInput.value)); // call the function to do the decimal to binary conversion. // parseInt() function to convert the input into a number.
  numberInput.value = ""; //clear the number input by setting its value to an empty string. Then later when you convert several numbers in a row, you won't have to delete the previous number before entering the next one.
};

// event listener to call the checkUserInput function when users click the Convert button.
convertBtn.addEventListener("click", checkUserInput); // call the function to check if the number input is empty, the value is not a number or the number is negative.
// Remember that function references are not called with parentheses.

// event listener to call the checkUserInput function when users press the Enter / Return key.
numberInput.addEventListener("keydown", (e) => {
  // The keydown event fires every time a user presses a key on their keyboard
  // Remember that "e" is a common parameter name for the event object
  // (removed) console.log(e); // to log e to the console
  // If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.
  // Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.
  // Note: Since the Enter and Return keys have similar functions, they both have the same string value of "Enter".

  // if you press the Enter / Return key
  if (e.key === "Enter") {
    checkUserInput(); // call the function to check if the number input is empty, the value is not a number or the number is negative.
  }
});
