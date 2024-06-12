document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseButton = document.getElementById('reverseButton');
    const copyButton = document.getElementById('copyButton');
    const result = document.getElementById('result');

    reverseButton.addEventListener('click', () => {
        const text = inputText.value;
        const reversedText = reverseString(text);
        displayResult(reversedText);
    });

    copyButton.addEventListener('click', () => {
        const text = result.textContent;
        copyToClipboard(text);
    });
});

/**
 * Function to reverse a given string.
 * @param {string} str - The string to reverse.
 * @return {string} - The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Function to copy text to clipboard.
 * @param {string} text - The text to copy to clipboard.
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied!');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

/**
 * Function to display the reversed string and show the copy button.
 * @param {string} text - The reversed string to display.
 */
function displayResult(text) {
    const result = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');
    result.textContent = text;
    result.style.display = 'block';
    copyButton.style.display = 'inline-block';
}
