document.getElementById('processButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const resultsDisplay = document.getElementById('resultsDisplay');

    if (input.trim() === '') {
        resultsDisplay.innerHTML = 'Please enter some numbers.';
        return;
    }

    const array = input.split(',').map(Number).filter(n => !isNaN(n));

    if (array.length === 0) {
        resultsDisplay.innerHTML = 'Please enter valid numbers.';
        return;
    }

    const sortedArray = [...array].sort((a, b) => a - b);
    const reversedArray = [...array].reverse();
    const slicedArray = array.slice(0, 5); // Example: slicing the first 5 elements
    const maxElement = Math.max(...array);
    const minElement = Math.min(...array);
    const sqrtElements = array.map(Math.sqrt);

    resultsDisplay.innerHTML = `
        <strong>Original Array:</strong> ${array}<br>
        <strong>Sorted Array:</strong> ${sortedArray}<br>
        <strong>Reversed Array:</strong> ${reversedArray}<br>
        <strong>Sliced Array (first 5 elements):</strong> ${slicedArray}<br>
        <strong>Maximum Element:</strong> ${maxElement}<br>
        <strong>Minimum Element:</strong> ${minElement}<br>
        <strong>Square Roots:</strong> ${sqrtElements.map(num => num.toFixed(2))}<br>
    `;
});
