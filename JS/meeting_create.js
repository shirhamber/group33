document.addEventListener('DOMContentLoaded', function() {
    const scheduleButton = document.getElementById('scudelAppointment');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('hour');
    const typeInput = document.getElementById('meetingType');

    scheduleButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission

        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;
        const selectedType = typeInput.value;
        const user = sessionStorage.getItem('whichUser');
        const newMeeting = {
            user: user,
            date: selectedDate,
            time: selectedTime,
            type: selectedType
        };

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

let login=sessionStorage.getItem('isLoggedIn');
if (!login) {
            alert('אתה צריך להתחבר כדי לקבוע פגישה');
            // Redirect the user to the user_connection page
            window.location.href = 'user_connection.html';

        }else{
    // Create a new meeting object
        alert('הפגישה נשמרה בהצלחה!');
        // Push the new meeting to the meetings array
        meetings.push(newMeeting);

        // Save the meetings array to localStorage
        saveMeetings();



}
  });
});