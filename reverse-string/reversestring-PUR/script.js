document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const displayText = document.getElementById("displayText");

    inputText.addEventListener("keyup", function () {
        const reversedText = reverseString(inputText.value);
        displayText.textContent = reversedText;
    });

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
});
