// dynamicHandler.js

// 🧪 Strategy 1: Polling using setInterval
// Wait for an element to appear (e.g., after delayed load)
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el); // ✅ Found the element
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        reject("Timeout: element not found"); // ❌ Gave up after timeout
      }
    }, 100); // Check every 100ms
  });
}

// Example usage:
waitForElement('input[type="email"]')
  .then((emailInput) => {
    emailInput.value = "test@example.com";
    console.log("✅ Email autofilled using polling");
  })
  .catch((err) => console.error("Polling error:", err));


// 🧪 Strategy 2: Using MutationObserver
// Detect when a new node matching your selector is added to the DOM
function observeElement(selector, callback) {
  const observer = new MutationObserver((mutations, obs) => {
    const el = document.querySelector(selector);
    if (el) {
      callback(el);          // ✅ Found it, run callback
      obs.disconnect();      // 🛑 Stop observing
    }
  });

  observer.observe(document.body, {
    childList: true,        // Look for new elements added to DOM
    subtree: true           // Include nested elements
  });
}

// Example usage:
observeElement('input[type="email"]', (emailInput) => {
  emailInput.value = "test@example.com";
  console.log("✅ Email autofilled using MutationObserver");
});
