const secInMin = 60
const secInHour = 3600
const secInDay = 86400
const secInMonth = 2592000
const secInYear = 31536000

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
        let inputInSec = inputToSeconds(inputUnit, input)
        let output = outputCalc(outputUnit, inputInSec)
        document.getElementById("outputText").innerHTML = `${output.toFixed(2)} ${unitString(outputUnit)}`
    }

    return false;
}

function inputToSeconds(inputUnit, input) {
    switch (inputUnit) {
        case "seconds":
            return input;
        case "minutes":
            return input * secInMin
        case "hours":
            return input * secInHour
        case "days":
            return input * secInDay
        case "months":
            return input * secInMonth
        case "years":
            return input * secInYear
    }
}

function outputCalc(outputUnit, input) {
    switch (outputUnit) {
        case "seconds":
            return input;
        case "minutes":
            return input / secInMin
        case "hours":
            return input / secInHour
        case "days":
            return input / secInDay
        case "months":
            return input / secInMonth
        case "years":
            return input / secInYear
    }
}

function unitString(unit) {
    switch (unit) {
        case "seconds":
            return "seconds";
        case "minutes":
            return "minutes"
        case "hours":
            return "hours"
        case "days":
            return "days"
        case "months":
            return "months"
        case "years":
            return "years"
    }
}