// popup.js
document.getElementById('interceptButton').addEventListener('click', () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.getCurrent().id },
      function: () => {
        // Insert your content script here
        function fetchApi(url) {
          // ... (use the code from the previous response)
        }
  
        const apiUrl = 'https://example.com/api/data';
        fetchApi(apiUrl);
      }
    });
  });