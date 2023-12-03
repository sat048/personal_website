// JavaScript to toggle text visibility
document.getElementById('toggleButton').addEventListener('click', function() {
    var additionalText = document.getElementById('additionalText');
    additionalText.style.display = (additionalText.style.display === 'none') ? 'block' : 'none';
  });

  //email button
function sendEmail() {

    var emailTo = 'satyak.khare@gmail.com';

    // Subject and body of the email (you can customize these)
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    // Construct the mailto URL
    var mailtoUrl = 'mailto:' + encodeURIComponent(emailTo) +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent(body);

    // Open the user's default email client
    window.location.href = mailtoUrl;
}

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