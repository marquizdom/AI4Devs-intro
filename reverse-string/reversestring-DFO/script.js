function reverseString() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('resultText').innerText = reversedText;
}

function copyToClipboard() {
    const resultText = document.getElementById('resultText').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert(`Texto copiado\n\n${resultText}`);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        reverseString();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        copyToClipboard();
    }
});
