document.addEventListener('DOMContentLoaded', function () {
    const inputString = document.getElementById('inputString');
    const reverseButton = document.getElementById('reverseButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    const copyButton = document.getElementById('copyButton');

    reverseButton.addEventListener('click', function () {
        const reversedString = reverseString(inputString.value);
        resultText.textContent = reversedString;
        resultContainer.classList.remove('hidden');
    });

    copyButton.addEventListener('click', function () {
        copyToClipboard(resultText.textContent);
        alert('Text copied!');
    });
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Tests
console.assert(reverseString('AI4Devs') === 'sveD4IA', 'Test Case 1 Failed');
console.assert(reverseString('OpenAI') === 'IAnepO', 'Test Case 2 Failed');
console.assert(reverseString('') === '', 'Test Case 3 Failed');
console.assert(reverseString('12345') === '54321', 'Test Case 4 Failed');
console.assert(reverseString('a') === 'a', 'Test Case 5 Failed');
