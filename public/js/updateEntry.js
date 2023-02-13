// Update entry
const updateEntryForm = async (e) => {
    e.preventDefault();

    const updates = [];
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const background = document.querySelector('#background-color').value;
    const id = window.location.href.split('/').pop();

    if(title) {updates.push(title)};
    if(content) {updates.push(content)};
    if(background) {updates.push(background)};
    updates.push(id);

    if(updates){
        const response = await fetch(`/api/entries/${id}`, {
            method: 'PUT',
            body: JSON.stringify({updates}),
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