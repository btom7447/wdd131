const temperature = 8; 
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
}

function displayWindChill() {
    const temperatureElement = document.getElementById('temperature');
    const windElement = document.getElementById('wind');
    const windChillElement = document.getElementById('windChill');

    temperatureElement.textContent = `${temperature} °C`;
    windElement.textContent = `${windSpeed} km/h`;

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = `N/A`;
    }
}

window.onload = displayWindChill;