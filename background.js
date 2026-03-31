chrome.commands.onCommand.addListener(async (command) => {
    if (command === "buscar-seleccion") {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        try {
            let results = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => window.getSelection().toString()
            });

            let text = results[0].result;

            if (text) {
                let query = encodeURIComponent(text);
                chrome.tabs.create({
                    url: `https://www.google.com/search?q=${query}`
                });
            } else {
                console.log("No seleccionaste nada");
            }

        } catch (error) {
            console.error("Error ejecutando script:", error);
        }
    }
});

