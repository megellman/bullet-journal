const entryForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if(title && content){
        const response = await fetch('/api/entry', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/journal');
        } else {
            alert('Failed to create entry');
        }
    }
};

document.querySelector('.entry-form').addEventListener('submit', entryForm);