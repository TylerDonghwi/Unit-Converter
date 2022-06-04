document.getElementById("submitBtn").onclick = function() {
    let celsius = document.getElementById("celsius").checked
    let fahrenheit = document.getElementById("fahrenheit").checked
    let input = document.getElementById("input").value

    document.getElementById("celsius-output").innerHTML = ""
    document.getElementById("fahrenheit-output").innerHTML = ""

    if (!input) {
        input = 0;
    }

    if (celsius) {
        document.getElementById("celsius-output").innerHTML = `${Math.round(input)}°C`
        document.getElementById("fahrenheit-output").innerHTML = `${Math.round(celsiusToFahrenheit(input))}°F`
    } else if (fahrenheit) {

        document.getElementById("celsius-output").innerHTML = `${Math.round(fahrenheitToCelsius(input))}°C`
        document.getElementById("fahrenheit-output").innerHTML = `${Math.round(input)}°F`
    } else {
        alert("Please choose what unit you're converting from")
    }

    return false;
}

function celsiusToFahrenheit(input) {
    return input * 9 / 5 + 32
}

function fahrenheitToCelsius(input) {
    return (input - 32) * 5 / 9
}