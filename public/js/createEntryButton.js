const createButton = document.getElementById("create-entry-button");

async function handleCreateEntryButton (event) {
    event.preventDefault();

    document.location.replace("/create-entry");
}

createButton.addEventListener("click", handleCreateEntryButton);