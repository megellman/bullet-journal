$(document).load(function () {
    $('#tour').joyride({
        autoStart: true
    });
  });
  
const createJournalButton = document.getElementById("create-journal");

async function handleCreateJournalButton (event) {
    event.preventDefault();

    document.location.replace("/create-journal");
}

createJournalButton.addEventListener("click", handleCreateJournalButton);