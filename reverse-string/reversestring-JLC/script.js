document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseButton = document.getElementById('reverseButton');
    const copyButton = document.getElementById('copyButton');
    const result = document.getElementById('result');

    reverseButton.addEventListener('click', () => {
        const text = inputText.value;
        const reversedText = text.split('').reverse().join('');
        result.textContent = reversedText;
        result.style.display = 'block';
        copyButton.style.display = 'inline-block';
    });

    copyButton.addEventListener('click', () => {
        const text = result.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied!');
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    });
});
