const journalForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const background = document.querySelector('#background-color').value;


    if(title && description && background){
        const response = await fetch('/api/journals', {
            method: 'POST',
            body: JSON.stringify({title, description, background}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create journal');
        }
    }
};

document.getElementById("newJournal").addEventListener('submit', journalForm);