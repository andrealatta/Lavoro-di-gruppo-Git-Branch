function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    const lengthInput = document.getElementById('passwordLength');
    const length = parseInt(lengthInput.value) || 12; // Default length is 12
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('passwordOutput').textContent = password;
}

document.getElementById('generatePassword').addEventListener('click', generatePassword);
