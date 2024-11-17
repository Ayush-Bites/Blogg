document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    document.getElementById('displayUsername').textContent = 'Username: ' + username;
    document.getElementById('displayEmail').textContent = 'Email: ' + email;
    document.getElementById('profileDetails').style.display = 'block';
});