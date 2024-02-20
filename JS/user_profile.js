// Get the button and input fields
const updateDetailsButton = document.getElementById('updateDetails');
const saveButton1 = document.getElementById('saveButton');
const meetingButton = document.getElementById('myMeetings');


const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const phone = document.getElementById('phone');

const errorMsg = document.querySelector('.errorMsg');
const meetingListContainer = document.getElementById('meetingList');


function displayErrorMessage(input, message) {
    // Remove any existing error message
    const existingErrorMessage = input.nextElementSibling;
    if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
        existingErrorMessage.textContent = message;
        return;
    }

    // Create a new span element for the error message
    const errorMessage = document.createElement('span');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');

    // Insert the error message after the input field
    input.insertAdjacentElement('afterend', errorMessage);
}

function removeErrorMessage(input) {
    const existingErrorMessage = input.nextElementSibling;
    if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
        existingErrorMessage.remove();
    }
}

updateDetailsButton.addEventListener('click', function(e) {
    e.preventDefault();
    errorMsg.textContent = '';

    // Enable all input fields
    firstName.disabled = false;
    lastName.disabled = false;
    email.disabled = false;
    age.disabled = false;
    phone.disabled = false;
    // Hide the Update Details button
    updateDetailsButton.style.display = 'none';
    meetingButton.style.display = 'none';

    // Display the Save button
    saveButton1.style.display = 'inline-block';

    // Remove any existing error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.remove();
    });
});

saveButton1.addEventListener('click', function(e) {
    e.preventDefault();
    errorMsg.textContent = '';

    // Validate first name
    if (!isValidInput(firstName.value)) {
        displayErrorMessage(firstName, 'First name is a mandatory field');
        return;
    } else {
        removeErrorMessage(firstName);
        if (!isValidName(firstName.value)) {
            displayErrorMessage(firstName, 'Please enter a valid first name with at least 2 letters');
            return;
        }
    }

    // Validate last name
    if (!isValidInput(lastName.value)) {
        displayErrorMessage(lastName, 'Last name is a mandatory field');
        return;
    } else {
        removeErrorMessage(lastName);
        if (!isValidName(lastName.value)) {
            displayErrorMessage(lastName, 'Please enter a valid last name with at least 2 letters');
            return;
        }
        // Check if first name and last name are in the same language
        if (!isSameLanguage(firstName.value, lastName.value)) {
            displayErrorMessage(lastName, 'Last name must be in the same language as the first name');
            return;
        }
    }

    // Validate email
    if (!isValidEmail(email.value)) {
        displayErrorMessage(email, 'Please enter a valid email address');
        return;
    } else {
        removeErrorMessage(email);
    }

    // Validate age
    if (!isValidInput(age.value)) {
        displayErrorMessage(age, 'Age is a mandatory field');
        return;
    } else {
        removeErrorMessage(age);
        if (!isValidAge(age.value)) {
            displayErrorMessage(age, 'Please enter a valid age between 16 and 100');
            return;
        }
    }

    // Validate phone number
    if (!isValidInput(phone.value)) {
        displayErrorMessage(phone, 'Phone number is a mandatory field');
        return;
    } else {
        removeErrorMessage(phone);
        if (!isValidPhoneNumber(phone.value)) {
            displayErrorMessage(phone, 'Please enter a valid phone number with 10 digits');
            return;
        }
    }

    // If all inputs are valid, display success message
    alert('Your profile has been updated successfully.');
    // Show the Update Details button again
    updateDetailsButton.style.display = 'inline-block';
    meetingButton.style.display= 'inline-block';
    // Hide the Save button
    saveButton1.style.display = 'none';

    // Disable all input fields
    firstName.disabled = true;
    lastName.disabled = true;
    email.disabled = true;
    age.disabled = true;
    phone.disabled = true;
});

function isValidInput(value) {
    return value.trim() !== '';
}

function isValidName(name) {
    return /^[A-Za-zא-ת\s]{2,}$/.test(name);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidAge(age) {
    const parsedAge = parseInt(age);
    return !isNaN(parsedAge) && parsedAge >= 16 && parsedAge <= 100;
}

function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}

function isSameLanguage(firstName, lastName) {
    const isHebrew = /^[א-ת]+$/.test(firstName);
    const isEnglish = /^[A-Za-z]+$/.test(firstName);
    if (isHebrew) {
        return /^[א-ת]+$/.test(lastName);
    } else if (isEnglish) {
        return /^[A-Za-z]+$/.test(lastName);
    }
    return false; // If first name is not in Hebrew or English
}

meetingButton.addEventListener('click', function(e) {
 // Clear existing content
    meetingListContainer.innerHTML = '';

    // Create list items with the specified values
    const meetings = [
        { date: '20.2', time: '11:00' },
        { date: '23.5', time: '12:00' }
    ];

    // Create and append list items to the container
    meetings.forEach(meeting => {
        const listItem = document.createElement('div');
        listItem.textContent = ${meeting.date} ${meeting.time};
        meetingListContainer.appendChild(listItem);
    });

    // Show the container
    meetingListContainer.style.display = 'block';
});