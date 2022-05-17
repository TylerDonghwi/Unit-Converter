const gramsInPound = 453.59237;
const gramsInOunce = 28.349523125;

document.getElementById("submitBtn").onclick = function() {
    let grams = document.getElementById("grams").checked
    let pounds = document.getElementById("pounds").checked
    let ounce = document.getElementById("ounce").checked
    let input = document.getElementById("input").value

    document.getElementById("gramOutput").innerHTML = ""
    document.getElementById("poundOutput").innerHTML = ""
    document.getElementById("ozOutput").innerHTML = ""

    if (grams) {
        document.getElementById("gramOutput").innerHTML = input;
        document.getElementById("poundOutput").innerHTML = fromGramToPound(input);
        document.getElementById("ozOutput").innerHTML = fromGramToOunce(input);
    } else if (pounds) {
        document.getElementById("gramOutput").innerHTML = fromPoundsToGram(input);
        document.getElementById("poundOutput").innerHTML = input;
        document.getElementById("ozOutput").innerHTML = fromGramToOunce(fromPoundsToGram(input));
    } else if (ounce) {
        document.getElementById("gramOutput").innerHTML = fromOunceToGram(input);
        document.getElementById("poundOutput").innerHTML = fromGramToPound(fromOunceToGram(input));
        document.getElementById("ozOutput").innerHTML = input;
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