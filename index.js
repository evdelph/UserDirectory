//Set variable for user input

const button = document.querySelector('#button1')

// Function to change text
function changeHeading(){
let myValue = document.querySelector('input').value
let titleChange = document.querySelector('#title')
titleChange.textContent = myValue
}

// Change text
button.addEventListener('click',changeHeading)

const button2 = document.querySelector("#button2")
function refreshPage(){
    location.reload()
}
button2.addEventListener('click',refreshPage)