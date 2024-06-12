### PROMTS

Develop a webpage with a input text and a display area below to show the reversed text. Implement a JavaScript function that reverses the input text in real time, triggered with each keyup event.

### RESPONSE

To create a webpage that reverses text in real-time as the user types, you can use HTML, CSS, and JavaScript. Below is an example implementation:

### HTML

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reverse Text</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div class="container">
            <h1>Reverse Text in Real Time</h1>
            <input type="text" id="inputText" placeholder="Type here..." />
            <div id="displayText"></div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

### CSS (styles.css)

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
    padding: 10px;
    font-size: 16px;
    width: 80%;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#displayText {
    padding: 10px;
    font-size: 18px;
    color: #333;
    word-wrap: break-word;
    background: #e0e0e0;
    border-radius: 4px;
}
```

### JavaScript (script.js)

```javascript
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
```

### Explanation:

1. **HTML**:

    - The structure includes an input text field and a display area.
    - The input field has an `id` of `inputText` and the display area has an `id` of `displayText`.
    - The HTML includes links to an external CSS file (`styles.css`) and a JavaScript file (`script.js`).

2. **CSS**:

    - Basic styling to center the content and style the input and display areas.
    - The container has some padding, background color, and a shadow to make it look better.

3. **JavaScript**:
    - Adds an event listener to the `inputText` element to listen for `keyup` events.
    - On each keyup event, the `reverseString` function is called, which reverses the string.
    - The reversed text is then displayed in the `displayText` element.
    - The `reverseString` function splits the input string into an array of characters, reverses the array, and then joins it back into a string.

This implementation ensures that as the user types, the reversed text is displayed in real-time.
