// Update entry
const updateEntryForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = window.location.href.split('/').pop();

    if(title && content){
        const response = await fetch(`/api/entry/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/journal');
        } else {
            alert('Failed to update entry');
        }
    } else if (title){
        const response = await fetch(`/api/entry/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/journal');
        } else {
            alert('Failed to update entry');
        }
    }else if (content){
        const response = await fetch(`/api/entry/${id}`, {
            method: 'PUT',
            body: JSON.stringify({content}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/journal');
        } else {
            alert('Failed to update entry');
        }
    }
};

document.querySelector('.entry-form').addEventListener('submit', updateEntryForm);