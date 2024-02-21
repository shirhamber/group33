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
    const isValidFirstName = validateInput(firstNameInput, 'אנא מלא את השם הפרטי');
    const isValidLastName = validateInput(lastNameInput, 'אנא מלא את שם המשפחה');
    const isValidEmail = validateEmailFormat(emailInput);
    const isValidPhone = validatePhoneNumberFormat(phoneInput);
    const isValidMessage = validateInput(messageInput, 'אנא מלא את ההודעה');

    // Validate name language
    const isNameLanguageValid = validateNameLanguage(firstNameInput.value, lastNameInput.value);

    // Check if all inputs are valid
    if (isValidFirstName && isValidLastName && isValidEmail && isValidPhone && isValidMessage && isNameLanguageValid) {
        // All inputs are valid, you can submit the form or perform other actions here
        displaySuccessMessage('הטופס נשלח בהצלחה');

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