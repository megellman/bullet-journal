//Update Already created entry
const updateEntryButton = async (event) => {
    event.preventDefault();

    document.location.replace('/');
};

document.querySelector('.updateEntryButton').addEventListener('click', updateEntryButton);


// Delete Entry Button
const deleteEntryButton = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        const response = await fetch(`/api/entries/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete entry!');
        }
    }
};

document.querySelector('.deleteEntryButton').addEventListener('click', deleteEntryButton);