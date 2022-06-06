function dropdown1() {
    if (document.querySelector('.dropdown-content1').style.display === "block") {
        document.querySelector('.dropdown-content1').style.display = 'none'
    } else {
        document.querySelector('.dropdown-content1').style.display = 'block'
    }
}

function dropdown2() {
    if (document.querySelector('.dropdown-content2').style.display === 'block') {
        document.querySelector('.dropdown-content2').style.display = 'none'
    } else {
        document.querySelector('.dropdown-content2').style.display = 'block'
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.dropbtn1')) {
        if (document.querySelector('.dropdown-content1').style.display === 'block') {
            document.querySelector('.dropdown-content1').style.display = 'none'
        }
    }
    if (!event.target.matches('.dropbtn2')) {
        if (document.querySelector('.dropdown-content2').style.display === 'block') {
            document.querySelector('.dropdown-content2').style.display = 'none'
        }
    }
}

// Change the text in the dropdown buttons
document.getElementById("secondsIn").onclick = () => document.getElementById("dropBtn1").innerHTML = `From seconds: <i class="fa fa-caret-down"></i>`
document.getElementById("minutesIn").onclick = () => document.getElementById("dropBtn1").innerHTML = `From minutes: <i class="fa fa-caret-down"></i>`
document.getElementById("hoursIn").onclick = () => document.getElementById("dropBtn1").innerHTML = `From hours: <i class="fa fa-caret-down"></i>`
document.getElementById("daysIn").onclick = () => document.getElementById("dropBtn1").innerHTML = `From days: <i class="fa fa-caret-down"></i>`
document.getElementById("monthsIn").onclick = () => document.getElementById("dropBtn1").innerHTML = `From months: <i class="fa fa-caret-down"></i>`
document.getElementById("yearsIn").onclick = () => document.getElementById("dropBtn1").innerHTML = `From years: <i class="fa fa-caret-down"></i>`

document.getElementById("secondsOut").onclick = () => document.getElementById("dropBtn2").innerHTML = `To seconds: <i class="fa fa-caret-down"></i>`
document.getElementById("minutesOut").onclick = () => document.getElementById("dropBtn2").innerHTML = `To minutes: <i class="fa fa-caret-down"></i>`
document.getElementById("hoursOut").onclick = () => document.getElementById("dropBtn2").innerHTML = `To hours: <i class="fa fa-caret-down"></i>`
document.getElementById("daysOut").onclick = () => document.getElementById("dropBtn2").innerHTML = `To days: <i class="fa fa-caret-down"></i>`
document.getElementById("monthsOut").onclick = () => document.getElementById("dropBtn2").innerHTML = `To months: <i class="fa fa-caret-down"></i>`
document.getElementById("yearsOut").onclick = () => document.getElementById("dropBtn2").innerHTML = `To years: <i class="fa fa-caret-down"></i>`