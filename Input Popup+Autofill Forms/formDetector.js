// formDetector.js

// Detects a form that has both a name and an email field
function detectForm() {
  const forms = document.querySelectorAll("form");

  for (const form of forms) {
    // Check if this form contains an email input
    const hasEmail = form.querySelector('input[type="email"]');

    // Check if it also contains a name-related input
    const hasName = form.querySelector(
      'input[name*="name"], input[placeholder*="name"]'
    );

    // If both fields exist, we assume it's a valid form to autofill
    if (hasEmail && hasName) return form;
  }

  // Return null if no suitable form found
  return null;
}

// Expose detectForm to other scripts (e.g., content.js)
window.detectForm = detectForm;
