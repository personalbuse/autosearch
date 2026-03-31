chrome.commands.onCommand.addListener((command) => {
    if (command === "buscar-seleccion") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let tab = tabs[0];

            chrome.tabs.sendMessage(tab.id, { action: "GET_SELECTION" }, (response) => {
                if (response && response.text) {
                    let query = encodeURIComponent(response.text);
                    let url = `https://www.google.com/search?q=${query}`;

                    chrome.tabs.create({ url: url });
                }
            });
        });
    }
});
