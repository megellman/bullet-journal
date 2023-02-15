// Update entry form
const updateEntryForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const background = document.querySelector('#background-color').value;
    const currentURL = window.location.href.split('/');
    const id = currentURL[currentURL.length - 2];
    
    const updates = {
        title,
        content,
        background
    }

    if(updates){
        const response = await fetch(`/api/entries/${id}`, {
            method: 'PUT',
            body: JSON.stringify({updates}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('../..');
        } else {
            alert('Failed to update entry');
        }
    } 
};

document.querySelector('#newEntry').addEventListener('submit', updateEntryForm);