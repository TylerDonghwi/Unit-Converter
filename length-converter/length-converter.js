const centiInMill = 10
const meterInMill = 1000
const kiloInMill = 1000000
const inchInMill = 25.4
const footInMill = 304.8
const yardInMill = 914.4
const mileInMill = 1609344

document.getElementById("submitBtn").onclick = function() {
    let select1 = document.getElementById("inputUnit")
    let select2 = document.getElementById("outputUnit")
    let inputUnit = select1.options[select1.selectedIndex].value
    let outputUnit = select2.options[select2.selectedIndex].value
    let input = document.getElementById("input").value

    if (!inputUnit || !outputUnit) {
        alert("Please choose what unit you're converting from and what unit you're converting to.")
    } else {
        if (!input) {
            input = 0;
        }
        let inputInMill = inputToMill(inputUnit, input)
        let output = outputCalc(outputUnit, inputInMill)
        document.getElementById("outputText").innerHTML = `${output.toFixed(2)} ${unitString(outputUnit)}`
    }

    return false;
}

function inputToMill(inputUnit, input) {
    switch (inputUnit) {
        case "millimetres":
            return input;
        case "centimetres":
            return input * centiInMill
        case "metres":
            return input * meterInMill
        case "kilometres":
            return input * kiloInMill
        case "inches":
            return input * inchInMill
        case "feet":
            return input * footInMill
        case "yards":
            return input * yardInMill
        case "miles":
            return input * mileInMill
    }
}

function outputCalc(outputUnit, input) {
    switch (outputUnit) {
        case "millimeters":
            return input;
        case "centimetres":
            return input / centiInMill
        case "metres":
            return input / meterInMill
        case "kilometres":
            return input / kiloInMill
        case "inches":
            return input / inchInMill
        case "feet":
            return input / footInMill
        case "yards":
            return input / yardInMill
        case "miles":
            return input / mileInMill
    }
}

function unitString(unit) {
    switch (unit) {
        case "millimeters":
            return "mm";
        case "centimetres":
            return "cm"
        case "metres":
            return "m"
        case "kilometres":
            return "km"
        case "inches":
            return "in"
        case "feet":
            return "ft"
        case "yards":
            return "yd"
        case "miles":
            return "mi"
    }
}