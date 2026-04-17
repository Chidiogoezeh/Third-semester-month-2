const reminderForm = document.getElementById('reminderForm');
const statusMessage = document.getElementById('statusMessage');

reminderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value
    };

    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        statusMessage.textContent = data.message;
        statusMessage.className = response.ok ? 'success' : 'error';

        if (response.ok) {
            reminderForm.reset();
        }
    } catch (error) {
        statusMessage.textContent = 'Connection failed. Try again.';
        statusMessage.className = 'error';
    }
});