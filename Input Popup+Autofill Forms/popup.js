// popup.js

// When the "Save" button is clicked
document.getElementById("save").addEventListener("click", () => {
  // Get values from the input fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Save to Chrome extension's local storage
  chrome.storage.local.set({ Name: name, Email: email }, () => {
    // Confirm to the user that data is saved
    alert("Saved!");
  });
});
