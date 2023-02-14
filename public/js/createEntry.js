const entryForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const background = document.querySelector('#background-color').value;


    if(title && content && background){
        const response = await fetch('/api/entry', {
            method: 'POST',
            body: JSON.stringify({title, content, background}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/journal');
        } else {
            alert('Failed to create entry');
        }
    }
};

document.querySelector('#newEntry').addEventListener('submit', entryForm);