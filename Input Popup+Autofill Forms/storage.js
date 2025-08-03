// storage.js

// Save data using chrome.storage.local
export function saveData(name, email) {
  chrome.storage.local.set({ Name: name, Email: email });
}

// Fetch saved name and email data
export function getData(callback) {
  chrome.storage.local.get(["Name", "Email"], callback);
}
