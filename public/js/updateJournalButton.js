// Redirects user to Create-journal view
const updateJournalButton = async (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    if (event.target.hasAttribute("data-id")) {
      document.location.replace("/create-journal");
    }
  };
  
  document
    .querySelector(".updateJournalButton")
    .addEventListener("click", updateJournalButton);
  
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
  
  document
    .querySelector(".deleteJournalButton")
    .addEventListener("click", deleteJournalButton);  