const msInKms = 3.6;
const msInMph = 2.23694;

document.getElementById("submitBtn").onclick = function() {
    let ms = document.getElementById("m/s").checked
    let kmh = document.getElementById("km/h").checked
    let mph = document.getElementById("mph").checked
    let input = document.getElementById("input").value

    if (!input) {
        input = 0;
    }

    console.log(input)
    document.getElementById("m/sOutput").innerHTML = ""
    document.getElementById("km/hOutput").innerHTML = ""
    document.getElementById("mphOutput").innerHTML = ""

    if (ms) {
        document.getElementById("m/sOutput").innerHTML = `${Math.round(input).toFixed(2)} m/s`;
        document.getElementById("km/hOutput").innerHTML = `${fromMsToKhm(input).toFixed(2)} km/h`;
        document.getElementById("mphOutput").innerHTML = `${fromMsToMph(input).toFixed(2)} mph`;
    } else if (kmh) {
        document.getElementById("m/sOutput").innerHTML = `${fromKmhToMs(input).toFixed(2)} m/s`;
        document.getElementById("km/hOutput").innerHTML = `${Math.round(input).toFixed(2)} km/h`;
        document.getElementById("mphOutput").innerHTML = `${fromMsToMph(fromKmhToMs(input)).toFixed(2)} mph`;
    } else if (mph) {
        document.getElementById("m/sOutput").innerHTML = `${fromMphToMs(input).toFixed(2)} m/s`;
        document.getElementById("km/hOutput").innerHTML = `${fromMsToKhm(fromMphToMs(input)).toFixed(2)} km/h`;
        document.getElementById("mphOutput").innerHTML = `${Math.round(input).toFixed(2)} mph`;
    } else {
        alert("Please choose what unit you're converting from")
    }

    return false;
}

// two functions returns any values into kg


function fromKmhToMs(input) {
    return input / msInKms;
}

function fromMphToMs(input) {
    return input / msInMph;
}

function fromMsToKhm(input) {
    return input * msInKms;
}

function fromMsToMph(input) {
    return input * msInMph;
}