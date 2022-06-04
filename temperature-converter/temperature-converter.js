document.getElementById("submitBtn").onclick = function() {
    let celsius = document.getElementById("celsius").checked
    let fahrenheit = document.getElementById("fahrenheit").checked
    let input = document.getElementById("input").value

    document.getElementById("celsius-output").innerHTML = ""
    document.getElementById("fahrenheit-output").innerHTML = ""

    if (celsius) {
        document.getElementById("celsius-output").innerHTML = `${input.toFixed(2)}`
            // .toLocaleString(undefined, { style: "unit: celsius" })
            // document.getElementById("fahrenheit-output").innerHTML = celciusToFahrenheit(input).toLocaleString(undefined, { style: "unit: fahrenheit" })
    } else if (fahrenheit) {

    } else {
        alert("Please choose what unit you're converting from")
    }

    return false;
}

function celciusToFahrenheit(input) {
    return input * 9 / 5 + 32
}