document.addEventListener('DOMContentLoaded', function() {
    const myAccountBtn = document.getElementById('myAccountBtn');

    // Add event listener to the My Account button
    myAccountBtn.addEventListener('click', function(e) {
        // Check if the user is logged in
        if (!isLoggedIn) {
            // If not logged in, prevent the default action and redirect to user_connection.html
            e.preventDefault();
            alert('You need to log in to access your account.');
            window.location.href = 'user_connection.html';
        }
    });
});