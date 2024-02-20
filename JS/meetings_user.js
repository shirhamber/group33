document.addEventListener("DOMContentLoaded", function() {
  const meetingsList = document.getElementById('meetings-list');

  // Sample meetings data
  const meetings = [
    { id: 1, title: 'מעקב', date: '2024-02-20', time: '10:00' },
    { id: 2, title: 'הצגה', date: '2024-02-21', time: '11:00' },
    { id: 3, title: 'מעקב', date: '2024-02-22', time: '17:00 ' }
  ];

  // Render meetings
  meetings.forEach(meeting => {
    const li = document.createElement('li');
    li.innerHTML = `${meeting.title} - ${meeting.date} - ${meeting.time}
      <button onclick="changeMeeting(${meeting.id})">Change</button>
      <button onclick="cancelMeeting(${meeting.id})">Cancel</button>`;
    meetingsList.appendChild(li);
  });

  // Function to change meeting
  window.changeMeeting = function(meetingId) {
    const newDateTime = prompt('Enter new date and time for the meeting (YYYY-MM-DD HH:MM AM/PM):');
    if (newDateTime !== null && newDateTime !== '') {
      // Here you can write code to update the meeting date and time
      alert(`Meeting date and time updated to ${newDateTime}`);
    }
  };

  // Function to cancel meeting
  window.cancelMeeting = function(meetingId) {
    const confirmCancel = confirm('אתה בטוח שתרצה לבטל את הפגישה?');
    if (confirmCancel) {
      // Here you can write code to cancel the meeting
      alert('הפגישה בוטלה');
    }
  };
});
