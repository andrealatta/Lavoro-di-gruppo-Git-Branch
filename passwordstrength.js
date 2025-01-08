function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    let strengthText = '';
    switch (strength) {
        case 5:
            strengthText = 'Very Strong';
            break;
        case 4:
            strengthText = 'Strong';
            break;
        case 3:
            strengthText = 'Moderate';
            break;
        case 2:
            strengthText = 'Weak';
            break;
        default:
            strengthText = 'Very Weak';
    }

    document.getElementById('passwordStrength').textContent = Strength: ${strengthText};
}

document.getElementById('generatePassword').addEventListener('click', function() {
    generatePassword();
    const password = document.getElementById('passwordOutput').textContent;
    checkPasswordStrength(password);
});
