// JavaScript to toggle text visibility
document.getElementById('toggleButton').addEventListener('click', function() {
    var additionalText = document.getElementById('additionalText');
    additionalText.style.display = (additionalText.style.display === 'none') ? 'block' : 'none';
  });

  

//transition
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var homeElements = document.querySelectorAll('.fullcode');
      homeElements.forEach(function(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }, 2000); // Adjust the delay (in milliseconds) as needed
  });

//contact
function submitForm() {
    // Replace 'your_email@example.com' with your actual email address
    var emailTo = 'satyak.khare@gmail.com';

    // Get the user's message from the textarea
    var userMessage = document.getElementById('message').value;

    // Create the mailto URL with subject and body
    var mailtoUrl = 'mailto:' + encodeURIComponent(emailTo) +
                    '?subject=' + encodeURIComponent('New Contact Form Submission') +
                    '&body=' + encodeURIComponent(userMessage);

    // Open the user's default email client
    window.location.href = mailtoUrl;
}

function scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }