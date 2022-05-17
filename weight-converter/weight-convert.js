const gramsInPound = 453.59237;
const gramsInOunce = 28.349523125;

document.getElementById("submitBtn").onclick = function() {
    let grams = document.getElementById("grams").checked
    let pounds = document.getElementById("pounds").checked
    let ounce = document.getElementById("ounce").checked
    let input = document.getElementById("input").value

    if (grams) {
        document.getElementById("gramOutput").innerHTML += input;
    } else if (pounds) {
        document.getElementById("poundOutput").innerHTML += input;
    } else if (ounce) {
        document.getElementById("ozOutput").innerHTML += input;
    } else {
        alert("Please choose what unit you're converting from")
    }
}

// two functions returns any values into kg
function fromPoundsToKg(input) {
    return gramsInPound * input;
}

function fromOunceToKg(input) {
    return gramsInOunce * input;
}