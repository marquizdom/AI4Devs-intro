/**
 * Function to reverse the input string.
 * This function retrieves the value from the input field, reverses the string,
 * and then sets the reversed string in the output text area.
 */
function reverseString() {
    // Retrieve the value from the input field
    const inputText = document.getElementById('inputText').value;

    // Reverse the string
    const reversedText = inputText.split('').reverse().join('');

    // Set the reversed string in the output text area
    document.getElementById('outputText').value = reversedText;
}
