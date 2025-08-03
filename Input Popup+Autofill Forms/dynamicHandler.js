// dynamicHandler.js

// 👀 Waits until a form input appears in the DOM, then autofills it

// Utility: Poll for an element until it shows up or timeout
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el);
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        reject("Timeout: element not found");
      }
    }, 100); // check every 100ms
  });
}

// Example usage:
waitForElement('input[type="email"]')
  .then((emailInput) => {
    emailInput.value = "test@example.com";
    console.log("Email autofilled");
  })
  .catch((err) => console.error(err));
