const journalForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();

    if(title && description){
        const response = await fetch('/api/journal', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create journal');
        }
    }
};

document.querySelector('#create-journal').addEventListener('submit', journalForm);