	
	function performOperation() {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
					let result = calculate(num1, num2);

					// Display the result
					displayResult(result);
				} else {
					displayResult('Please enter valid numbers');
				}
			}

			function calculate(a, b) {

                let result={};
				// Introduce a debugger statement to pause execution
				debugger;

                result.addition=a+b;

                debugger;
                
                result.subtraction=a-b;

                debugger;

                result.multiplication=a*b;

                debugger;

                result.division=a/b;


				// Multiply the numbers //Before practice task
                // it was just      return a*b origionally
                //Added other operations for practice task
                debugger;
				return result;

                //Note: when i used multiple debuggers, i click resume after each
                //  one and it stops at the next debugger,
                //  i could just use one and continue seeing the flow using
                //  the arrows at the top right or F10 buttons and the rest
			}

			function displayResult(result) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('result');
				resultElement.innerHTML = `<p>The result is:</p> <br>
                <p>Addition: ${result.addition}<br>
                   Subtraction ${result.subtraction}<br>
                   Multiplication: ${result.multiplication}<br>
                   Division: ${result.division}<br> </p>`;
			}
		