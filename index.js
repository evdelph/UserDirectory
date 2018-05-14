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

// Make new variable for refresh button
const button2 = document.querySelector("#button2")

// Refresh function
function refreshPage(){
    location.reload()
}

// Click event
button2.addEventListener('click',refreshPage)

// Part 2 Code

// Button 1_1
const button1_1 = document.querySelector('#button1_1')
function changeFirstSubHeading(){
    let myValue = document.querySelector('input').value
    let subtitleChange = document.querySelector('#first')
    subtitleChange.textContent = myValue
    }
button1_1.addEventListener('click',changeFirstSubHeading)

// Button 1_2
const button1_2 = document.querySelector('#button1_2')
function changeSecondSubHeading(){
    let myValue = document.querySelector('input').value
    let subtitleChange = document.querySelector('#second')
    subtitleChange.textContent = myValue
    }
button1_2.addEventListener('click',changeSecondSubHeading)
