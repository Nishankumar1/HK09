document.getElementById('signupButton').addEventListener('click', function() {


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    
    if (name && email && phone && password) {
      
        document.getElementById('profileName').textContent = `Name: ${name}`;
        document.getElementById('profileEmail').textContent = `Email: ${email}`;
        document.getElementById('profilePhone').textContent = `Phone: ${phone}`;

        
        document.getElementById('signupSection').style.display = 'none'; 
        document.getElementById('profilePage').style.display = 'block';  
    } else {
        alert('Please fill in all fields.');
    }
});
