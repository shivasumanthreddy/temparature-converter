function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;
    var convertedTemperatureElement = document.getElementById("convertedTemperature");
  
    if (temperatureInput === "") {
      alert("Please enter a temperature.");
      return;
    }
  
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for the temperature.");
      return;
    }
  
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
  
    if (unitInput === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      convertedTemperatureElement.textContent = convertedTemperature.toFixed(2) + " °F";
    } else if (unitInput === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      convertedTemperatureElement.textContent = convertedTemperature.toFixed(2) + " °C";
    }
  }