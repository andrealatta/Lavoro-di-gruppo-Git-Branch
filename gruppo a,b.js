function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    const length = 12; // Lunghezza predefinita della password
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('passwordOutput').textContent = password;
}

document.getElementById('generatePassword').addEventListener('click', generatePassword);

