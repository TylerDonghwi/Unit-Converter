const gramsInPound = 453.59237;
const gramsInOunce = 28.349523125;

document.getElementById("submitBtn").onclick = function() {
    let grams = document.getElementById("grams").checked
    let pounds = document.getElementById("pounds").checked
    let ounce = document.getElementById("ounce").checked
    let input = document.getElementById("input").value

    if (!input) {
        input = 0;
    }

    document.getElementById("gramOutput").innerHTML = ""
    document.getElementById("poundOutput").innerHTML = ""
    document.getElementById("ozOutput").innerHTML = ""

    if (grams) {
        document.getElementById("gramOutput").innerHTML = `${Math.round(input).toFixed(2)} g`;
        document.getElementById("poundOutput").innerHTML = `${fromGramToPound(input).toFixed(2)} lb`;
        document.getElementById("ozOutput").innerHTML = `${fromGramToOunce(input).toFixed(2)} oz`;
    } else if (pounds) {
        document.getElementById("gramOutput").innerHTML = `${fromPoundsToGram(input).toFixed(2)} g`;
        document.getElementById("poundOutput").innerHTML = `${Math.round(input).toFixed(2)} lb`;
        document.getElementById("ozOutput").innerHTML = `${fromGramToOunce(fromPoundsToGram(input)).toFixed(2)} oz`;
    } else if (ounce) {
        document.getElementById("gramOutput").innerHTML = `${fromOunceToGram(input).toFixed(2)} g`;
        document.getElementById("poundOutput").innerHTML = `${fromGramToPound(fromOunceToGram(input)).toFixed(2)} lb`;
        document.getElementById("ozOutput").innerHTML = `${Math.round(input).toFixed(2)} oz`;
    } else {
        alert("Please choose what unit you're converting from")
    }

    return false;
}

// two functions returns any values into kg
function fromPoundsToGram(input) {
    return gramsInPound * input;
}

function fromOunceToGram(input) {
    return gramsInOunce * input;
}

function fromGramToPound(input) {
    return input / gramsInPound;
}

function fromGramToOunce(input) {
    return input / gramsInOunce;
}