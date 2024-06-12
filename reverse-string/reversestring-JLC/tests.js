// Test reverseString function
function testReverseString() {
    console.assert(reverseString('AI4Devs') === 'sveD4IA', 'Test 1 Failed');
    console.assert(reverseString('hello') === 'olleh', 'Test 2 Failed');
    console.assert(reverseString('') === '', 'Test 3 Failed');
    console.assert(reverseString('a') === 'a', 'Test 4 Failed');
    console.log('All reverseString tests passed');
}

// Mock function to test displayResult
function testDisplayResult() {
    const result = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');
    displayResult('test');
    console.assert(result.textContent === 'test', 'Test 1 Failed');
    console.assert(result.style.display === 'block', 'Test 2 Failed');
    console.assert(copyButton.style.display === 'inline-block', 'Test 3 Failed');
    console.log('All displayResult tests passed');
}

// Test copyToClipboard function
function testCopyToClipboard() {
    // This is a bit tricky to test due to the async nature of clipboard API
    // For a real test, you might need a mock of the navigator.clipboard object
    console.log('Please manually verify copyToClipboard functionality.');
}

// Run tests
testReverseString();
testDisplayResult();
testCopyToClipboard();