function getSelectedText() {
    return window.getSelection().toString();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "GET_SELECTION") {
        sendResponse({ text: getSelectedText() });
    }
});

