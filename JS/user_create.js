const form = document.querySelector('.signupContainer');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneNumberInput = document.getElementById('phoneNumber');
const signupBtn = document.getElementById('signupBtn');
const googleBtn = document.getElementsByClassName('google');
const errorMsg = document.querySelector('.errorMsg');
const userList = document.querySelector('.users');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter === signupBtn) {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const phoneNumber = phoneNumberInput.value;

        if (!isValidName(firstName)) {
            errorMsg.textContent = 'Please enter a valid first name';
            return;
        }
        if (!isValidName(lastName)) {
            errorMsg.textContent = 'Please enter a valid last name';
            return;
        }
        if (!isValidAge(age)) {
            errorMsg.textContent = 'Please enter a valid age from 16 ';
            return;
        }
        if (!isValidEmail(email)) {
            errorMsg.textContent = 'Please enter a valid email';
            return;
        }
        if (!isValidPassword(password)) {
            errorMsg.textContent = 'Password must be at least 8 characters long and not contain spaces';
            return;
        }

        if (!isValidPhoneNumber(phoneNumber)) {
            errorMsg.textContent = 'Please enter a valid phone number';
            return;
        }
         else {
            errorMsg.textContent = ''
            alert('שלום! ההרשמה בוצעה בהצלחה');
            window.location.href = "user_connection.html";
        }
    }
    if (e.submitter === googleBtn) {
        window.location.href = "https://mail.google.com/mail/u/0/#inbox";
    }
});

function isValidEmail(email) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}

function isValidName(name) {
    const validFirstName = /^[a-zA-Z\s]+$/;
    return validFirstName.test(name);
}

function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] === " ") {
            return false;
        }
    }
    return true;
}

function isValidPhoneNumber(phoneNumber) {
    const validPhoneNumber = /^\d{10}$/;
    return validPhoneNumber.test(phoneNumber);
}

function isValidAge(age) {
    if (age < 16) {
        return false;
    }
    return true;


}

