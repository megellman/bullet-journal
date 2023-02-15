//Update Already created entry
const updateEntryButton = async (event) => {
    event.preventDefault();

    const originURL = document.location.toString().split("/");
    const journal_id = originURL[originURL.length - 3];
    const id = originURL[originURL.length - 1];

    console.log(`Journal: ${journal_id}
    Entry: ${id}`);

    // From entry details
    document.location.replace(`/journals/${journal_id}/entries/${id}/update-entry`);
};

document.querySelector('.updateEntryButton').addEventListener('click', updateEntryButton);


// Delete Entry Button
const deleteEntryButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/entries/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('..');
        } else {
            alert('Failed to delete entry!');
        }
    }
};

document.querySelector('.deleteEntryButton').addEventListener('click', deleteEntryButton);