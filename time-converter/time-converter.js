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