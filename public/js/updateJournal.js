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

// Update journal form
const updateJournalForm = async (e) => {
  e.preventDefault();

  const updates = {};
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const background = document.querySelector("#background-color").value;
  const id = window.location.href.split("/").pop();

  if (title) {
    updates["title"] = title;
  }
  if (description) {
    updates["description"] = description;
  }
  if (background) {
    updates["background"] = background;
  }

  if (Object.keys(updates).length > 0) {
    // check that updates object is not empty
    const response = await fetch(`/api/journals/${id}`, {
      method: "PUT",
      body: JSON.stringify({ updates }), // pass updates object as body
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // check response status
      document.location.replace("/dashboard"); // redirect to dashboard page
    } else {
      // handle error case
      alert("Failed to update journal"); // alert user of failed update
    }
  } else {
    // handle empty updates object case

    alert("No changes made"); // alert user that no changes were made
  }
};

document
  .querySelector("#update-journal-button")
  .addEventListener("click", updateJournalForm);
