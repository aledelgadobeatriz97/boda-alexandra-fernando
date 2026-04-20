// script.js

// RSVP Functionality for Guest Confirmations

// Function to handle RSVP submission
function handleRSVP(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get guest information from the form
    const guestName = document.getElementById('guestName').value;
    const guestEmail = document.getElementById('guestEmail').value;
    const isAttending = document.querySelector('input[name="attendance"]:checked').value;

    // Prepare the data to be sent
    const rsvpData = {
        name: guestName,
        email: guestEmail,
        attending: isAttending === 'yes' // converts string to boolean
    };

    // Send confirmation email (mock function)
    sendConfirmationEmail(rsvpData);

    // Show confirmation message
    alert(`Thank you ${guestName} for your response!`);
}

// Mock function to send confirmation email
function sendConfirmationEmail(data) {
    console.log(`Sending email to: ${data.email}`);
    console.log(`Email content: Your RSVP is recorded. Attending: ${data.attending}`);
    // Here you would implement the actual email sending logic.
}

// Event listener for the RSVP form
document.getElementById('rsvpForm').addEventListener('submit', handleRSVP);