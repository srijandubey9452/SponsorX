// Tab Switching Logic
document.addEventListener('DOMContentLoaded', () => { 
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target; 

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show the active tab content
            document.querySelector(targetId).classList.add('active'); 

            // Update active tab button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});

// Placeholder functionality for buttons 
document.getElementById('loginBtn').addEventListener('click', () => {
    alert('Login functionality coming soon!'); 
});

document.getElementById('registerBtn').addEventListener('click', () => {
    alert('Registration functionality coming soon!'); 
});
document.getElementById('creator-login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log('Creator login with username/password submitted!'); 
  });
  
  // Add event listeners for Instagram/YouTube buttons (Example for Instagram)
  document.querySelector('.btn-instagram').addEventListener('click', function() {
      console.log('Creator login with Instagram initiated!');
  });
  
