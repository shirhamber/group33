const scheduleButton = document.getElementById('scudelAppointment');
        const dateInput = document.getElementById('date');
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        scheduleButton.addEventListener('click', function (e) {
            e.preventDefault();

           const selectedDate = dateInput.value;
            if (selectedDate < todayStr) {
                alert('You cannot schedule an appointment for a past date.');
                return
            }
            alert('Appointment successfully scheduled!');
            // Additional logic to submit the form can be added here
});