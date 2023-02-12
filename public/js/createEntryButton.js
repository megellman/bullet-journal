const createButton = document.getElementById("create-entry-button");

async function handleCreateEntryButton (event) {
    event.preventDefault();

    document.location.replace("/createEntry");
}

createButton.addEventListener("click", handleCreateEntryButton);