// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertButton');
    const celsiusInput = document.getElementById('celsius');
    const resultParagraph = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const celsiusValue = parseFloat(celsiusInput.value);

        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
            resultParagraph.textContent = `${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F`;
        } else {
            resultParagraph.textContent = 'Please enter a valid temperature in Celsius.';
        }
    });
});
