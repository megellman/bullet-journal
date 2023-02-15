// Create an entry
const entryForm = async (e) => {
    
    e.preventDefault();
   
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const background = document.querySelector('#background-color').value;
    const url = window.location.href.split('/');
    const id = url[4];



    if(title && content && background){
        const response = await fetch('/api/entries', {
            method: 'POST',
            body: JSON.stringify({title, content, background, id}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace(`../../journals/${id}`);
        } else {
            alert('Failed to create entry');
        }
    }
};

document.querySelector('#create-entry-button').addEventListener('click', entryForm);