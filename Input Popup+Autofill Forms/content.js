// content.js

// Run this after the page has fully loaded
window.addEventListener("load", () => {
  // Get saved name and email from Chrome storage
  chrome.storage.local.get(["Name", "Email"], ({ Name, Email }) => {
    // Use our form detection utility to find a suitable form
    const form = detectForm();
    if (!form) return; // If no suitable form found, exit

    // Try to find name input field (based on common name patterns)
    const nameInput = form.querySelector(
      'input[name*="name"], input[placeholder*="name"]'
    );

    // Try to find email input field
    const emailInput = form.querySelector(
      'input[type="email"], input[name*="email"]'
    );

    // Fill in the name and email fields, if found and saved
    if (nameInput && Name) nameInput.value = Name;
    if (emailInput && Email) emailInput.value = Email;

    // Optionally submit the form if there's a submit button
    const submit = form.querySelector(
      'input[type="submit"], button[type="submit"]'
    );
    if (submit) submit.click();
  });
});
