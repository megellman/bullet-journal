// Update journal
const journalForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();

    if(title){
        const response = await fetch('/api/journal', {
            method: 'POST',
            body: JSON.stringify({title}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update journal');
        }
    } else if (description){
        const response = await fetch('/api/journal', {
            method: 'POST',
            body: JSON.stringify({description}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update journal');
        }
    }
};

document.querySelector('.journal-form').addEventListener('submit', journalForm);