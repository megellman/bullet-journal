// Redirects user to Create-journal view
const updateJournalButton = async (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      document.location.replace(`journals/${id}/update-journal`);
    }
  };
  
  let updateJournalButtons = document.querySelectorAll(".updateJournalButton");
  for (let i = 0; i < updateJournalButtons.length; i++) {
    updateJournalButtons[i].addEventListener("click", updateJournalButton);
  }
  
  // Delete Journal
  const deleteJournalButton = async (event) => {
    event.stopPropagation();
  
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/journals/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete entry!");
      }
    }
  };
  
  let deleteJournalButtons = document.querySelectorAll(".deleteJournalButton");
  for (let i = 0; i < deleteJournalButtons.length; i++) {
    deleteJournalButtons[i].addEventListener("click", deleteJournalButton);
  }
