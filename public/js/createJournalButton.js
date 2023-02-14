const createJournalButton = document.getElementById("create-journal");

function handleCreateJournalButton (event) {
    event.preventDefault();

    document.location.replace("/create-journal");
}

createJournalButton.addEventListener("click", handleCreateJournalButton);