const signUpButton = document.getElementById("signUpButton");
const form = document.querySelector('.signInContainer')
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const errorMsg = document.querySelector('.errorMsg');
const signInButton = document.getElementById("signInButton");

signUpButton.addEventListener("click", function () {
    window.location.href = "user_create.html";
});

class User {
    constructor( firstName, lastName,age,email, password, phoneNumber) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;

        this.joinDate = new Date();
    }
}

const users = [
    {

        firstName: 'Roni',
        lastName: 'Chen',
        age: 28,
        email: 'hamber@post.bgu.ac.il',
        password: '12345678',
        phoneNumber: '0527967566',
        joinDate: new Date()
    },
    {

        firstName: 'shir',
        lastName: 'hamber',
        age: 25,
        email: 'shirhambera@gmail.com',
        password: '12121212',
        phoneNumber: '0528198984',
        joinDate: new Date()
    }
];

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';
    const email = emailInput.value;
    const password = passwordInput.value;
    let isUser = false;
    if (!isValidEmail(email)) {
        errorMsg.textContent = 'Please enter a valid email';
        return;
    }
    if (!isValidPassword(password)) {
        errorMsg.textContent = 'Password must be at least 8 characters long and not contain spaces';
        return;
    } else {
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                alert('welcome')
                isUser = true;
                window.location.href = "closet_userCloset.html";
                break;
            }
            if (email === users[i].email && password !== users[i].password) {
                alert('Incorrect password !')
                isUser = true;
                break;
            }
        }
        if (!isUser) {
            alert('No user found for the entered details! Check the input or register');
        }
    }
})

function isValidEmail(email) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}

function isValidPassword(password) {
    const validPassword = /^\S{8,}$/;
    return validPassword.test(password);
}

