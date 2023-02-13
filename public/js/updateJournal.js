// Update journal
const updateJournalForm = async (e) => {
    e.preventDefault();

    const updates = [];
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const background = document.querySelector('#background-color').value;
    const id = window.location.href.split('/').pop();

    if(title) {updates.push(title)};
    if(description) {updates.push(description)};
    if(background) {updates.push(background)};
    updates.push(id);

    if(updates){
        const response = await fetch(`/api/journals/${id}`, {
            method: 'PUT',
            body: JSON.stringify({updates}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update journal');
        }
    } 
};

document.querySelector('.journal-form').addEventListener('submit', updateJournalForm);
document.querySelector('.journal-form').addEventListener('submit', updateJournalForm);
document.querySelector('.journal-form').addEventListener('submit', updateJournalForm);
document.querySelector('.journal-form').addEventListener('submit', updateJournalForm);