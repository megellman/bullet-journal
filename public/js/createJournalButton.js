const createJournalButton = document.getElementById("create-journal");

async function handleCreateJournalButton (event) {
    event.preventDefault();

    document.location.replace("/create-journal");
}

createButton.addEventListener("click", handleCreateEntryButton);