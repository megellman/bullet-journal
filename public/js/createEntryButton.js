// When button is clicked, render the create entry form
const createButton = document.getElementById("create-entry-button");

async function handleCreateEntryButton (event) {
    event.preventDefault();
    const url = window.location.href.split('/');
    const location = url[5]; 

    if(url[5] == 'entries'){
        // If user is on the /journals/:journal-id/entries page
        const journalID = url[4];
        const entryID = url[6];
        document.location.replace(`/journals/${journalID}/create-entry`);
    } else {
        // If user on the journals/:journal-id page
        const id = window.location.href.split('/').pop();
        document.location.replace(`/journals/${id}/create-entry`);
    }
}

createButton.addEventListener("click", handleCreateEntryButton);