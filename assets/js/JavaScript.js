document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const formContainer = document.getElementById('formContainer');

    // Navn validering
    let usernameElement = document.getElementById('navn');
    usernameElement.addEventListener('input', () => {
        validateName(usernameElement);
    });

    // Etternavn validering
    let userlastnameElement = document.getElementById('efternavn');
    userlastnameElement.addEventListener('input', () => {
        validateName(userlastnameElement);
    });

    // Email validering
    let useremailElement = document.getElementById('email');
    useremailElement.addEventListener('input', () => {
        validateEmail(useremailElement);
    });

    // Alder validering
    let userageElement = document.getElementById('alder');
    userageElement.addEventListener('input', () => {
        validateAge(userageElement);
    });

    // Interesser validering
    let userInterestElement = document.getElementById('interesser');
    userInterestElement.addEventListener('change', () => {
        validateSelect(userInterestElement);
    });

    const namePattern = /^[A-Za-zÆØÅæøå\s\-']+$/;

    function validateName(nameElement) {
        let name = nameElement.value.trim();
        if (namePattern.test(name)) {
            nameElement.style.outlineColor = 'green';
            return true;
        } else {
            nameElement.style.outlineColor = 'red';
            return false;
        }
    }

    function validateEmail(emailElement) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emailElement.value.trim())) {
            emailElement.style.outlineColor = 'green';
            return true;
        } else {
            emailElement.style.outlineColor = 'red';
            return false;
        }
    }

    function validateAge(ageElement) {
        let age = parseInt(ageElement.value);
        if (!isNaN(age) && age > 0) { 
            ageElement.style.outlineColor = 'green';
            return true;
        } else {
            ageElement.style.outlineColor = 'red';
            return false;
        }
    }
    

    function validateSelect(selectElement) {
        if (selectElement.value !== '') {
            selectElement.style.outlineColor = 'green';
            return true;
        } else {
            selectElement.style.outlineColor = 'red';
            return false;
        }
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        let isFormValid = true;

        if (!validateName(usernameElement)) {
            isFormValid = false;
        }

        if (!validateName(userlastnameElement)) {
            isFormValid = false;
        }

        if (!validateEmail(useremailElement)) {
            isFormValid = false;
        }

        if (!validateAge(userageElement)) {
            isFormValid = false;
        }

        if (!validateSelect(userInterestElement)) {
            isFormValid = false;
        }

        if (isFormValid) {
            console.log('Jubii!!!');

            let formData = new FormData(formContainer);
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
        } else {
            console.log('Womp Womp...');
        }
    });
});
