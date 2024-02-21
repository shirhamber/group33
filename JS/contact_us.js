document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    // Reset error messages
    clearErrorMessages();

    // Get input elements
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Validate input fields
    const isValidFirstName = validateInput(firstNameInput, 'Please fill in your first name');
    const isValidLastName = validateInput(lastNameInput, 'Please fill in your last name');
    const isValidEmail = validateEmailFormat(emailInput);
    const isValidPhone = validatePhoneNumberFormat(phoneInput);
    const isValidMessage = validateInput(messageInput, 'Please fill in your message');

    // Validate name language
    const isNameLanguageValid = validateNameLanguage(firstNameInput.value, lastNameInput.value);

    // Check if all inputs are valid
    if (isValidFirstName && isValidLastName && isValidEmail && isValidPhone && isValidMessage && isNameLanguageValid) {
        // All inputs are valid, you can submit the form or perform other actions here
        displaySuccessMessage('The form has been sent successfully.');

        // Clear all input fields
        clearInputFields();
    }
});

function clearInputFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}