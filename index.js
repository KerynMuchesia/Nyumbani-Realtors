<script>
      // Wait for the DOM to be ready
      document.addEventListener("DOMContentLoaded", function() {

          // Adding event listener for "READ MORE" button click
          document.querySelector('.sub2-section1 a').addEventListener('click', function() {
              alert('Read more clicked!');
              // Adding logic for handling the "READ MORE" click here
          });

          // Adding event listener for "SELL WITH US" button click
          document.querySelector('.section-2 a').addEventListener('click', function() {
              alert('Sell with us clicked!');
              // Adding logic for handling the "SELL WITH US" click here
          });

          // Adding event listener for "Buy" link click
          document.querySelector('.left-nav li:nth-child(1) a').addEventListener('click', function() {
              alert('Buy clicked!');
              // Adding logic for handling the "Buy" link click here
          });

          // Adding event listener for "Sell" link click
          document.querySelector('.left-nav li:nth-child(2) a').addEventListener('click', function() {
              alert('Sell clicked!');
              // Adding logic for handling the "Sell" link click here
          });

          // Adding event listener for "Journey" link click
          document.querySelector('.left-nav li:nth-child(3) a').addEventListener('click', function() {
              alert('Journey clicked!');
              // Adding logic for handling the "Journey" link click here
          });

          // Adding event listener for newsletter subscription form
          document.querySelector('.sub2-section9-right-footer-1 form').addEventListener('submit', function(event) {
              event.preventDefault();
              // Basic email validation
              const emailInput = document.querySelector('.sub2-section9-right-footer-1 form input[type="text"]');
              const emailValue = emailInput.value.trim();

              if (!emailValue || !isValidEmail(emailValue)) {
                  alert('Please enter a valid email address.');
                  return;
              }

              alert('Subscription successful!');
              // Adding logic for handling successful subscription
              // May send an email to your server for processing
          });

          // Function to validate email format
          function isValidEmail(email) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(email);
          }
      });
  </script>