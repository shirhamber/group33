document.addEventListener('DOMContentLoaded', function() {
    const scheduleButton = document.getElementById('scudelAppointment');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('hour');
    const typeInput = document.getElementById('meetingType');

    scheduleButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission

        // Check if the user is logged in
        if (!isLoggedIn) {
            alert('אתה צריך להתחבר כדי לקבוע פגישה');
            // Redirect the user to the user_connection page
            window.location.href = 'user_connection.html';
            return;
        }

        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;
        const selectedType = typeInput.value;

        // Validate input fields
        if (!selectedDate || !selectedTime || !selectedType) {
            alert('בבקשה תמלא את כל הפרטים בשביל הפגישה');
            return;
        }

        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        if (selectedDate < todayStr) {
            alert('אתה לא יכול לקבוע פגישה בתאריך שכבר עבר');
            return;
        }

        // Create a new meeting object
        const newMeeting = {
            date: selectedDate,
            time: selectedTime,
            type: selectedType
        };

        // Push the new meeting to the meetings array
        meetings.push(newMeeting);

        // Save the meetings array to localStorage
        saveMeetings();

        alert('הפגישה נשמרה בהצלחה!');
    });
});