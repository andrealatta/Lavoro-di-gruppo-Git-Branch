document.getElementById('copyPassword').addEventListener('click', function() {
    const password = document.getElementById('passwordOutput').textContent;
    if (password && password !== 'Your password will appear here.') {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy password.');
        });
    } else {
        alert('No password to copy!');
    }
});
