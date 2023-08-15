document.getElementById('submit-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('user-email');
    // always use .value to get the text from input field
    const email = emailInput.value;
    const passInput = document.getElementById('user-password');
    const password = passInput.value;
    // check and verify email pass 
    if (email === 'danknazi@hotmail.com' && password === 'DANKNAZi') {
        // to go into another page using click handler in js use window.location.href = 'file name'
        window.location.href = 'bank.html';
    } else {
        // to popup an alert message use alert 
        alert('invalid user')
    }
})