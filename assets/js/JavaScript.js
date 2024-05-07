const submitButton = document.getElementById('submitButton')

// navn
let usernameElement = document.getElementById('navn')
usernameElement.addEventListener('keydown', (event) => {
    console.log(event.target.value);
    let inputLength = event.target.value.length
    if (inputLength >= 2) {
        console.log('jubi');
        usernameElement.style.outlineColor = 'green'
    }
    else {
        console.log('NEJ');
        usernameElement.style.outlineColor = 'red'
    }})
// efternavn
let userlastnameElement = document.getElementById('efternavn')
userlastnameElement.addEventListener('keydown', (event) => {
    console.log(event.target.value);
    let inputLength = event.target.value.length
    if (inputLength >= 2) {
        console.log('jubi');
        userlastnameElement.style.outlineColor = 'green'
    }
    else {
        console.log('NEJ');
        userlastnameElement.style.outlineColor = 'red'
    }})
// email
let useremailElement = document.getElementById('email')
useremailElement.addEventListener('keydown', (event) => {
    console.log(event.target.value);
    let inputLength = event.target.value.length
    if (inputLength >= 2) {
        console.log('jubi');
        useremailElement.style.outlineColor = 'green'
    }
    else {
        console.log('NEJ');
        useremailElement.style.outlineColor = 'red'
    }})
// alder
let userageElement = document.getElementById('alder')
userageElement.addEventListener('keydown', (event) => {
    console.log(event.target.value);
    let inputLength = event.target.value.length
    if (inputLength <= 0) {
        console.log('jubi');
        userageElement.style.outlineColor = 'green'
    }
    else {
        console.log('NEJ');
        userageElement.style.outlineColor = 'red'
    }})



    
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Submit button clicked');

    // console log navn
    let userName = document.getElementById('navn').value
    console.log('Name:', userName)

    // console log efternavn
    let userLastName = document.getElementById('efternavn').value
    console.log('Last Name:', userLastName)

    // console log email
    let userEmail = document.getElementById('email').value
    console.log('Email:', userEmail)

    // console log alder
    let userAge = document.getElementById('alder').value
    console.log('Age:', userAge)

    // console log interesser
    let userInterest = document.getElementById('interesser').value
    console.log('Interests:', userInterest)

    let myUserData = [userName, userLastName, userEmail, userAge, userInterest]
    console.table(myUserData)

}
)
