chrome.commands.onCommand.addListener(async (command) => {
    if (command === "buscar-seleccion") {
        try {
            let [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true
            });

            let results = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => window.getSelection().toString()
            });

            let text = results[0].result;

            if (!text || text.trim() === "") {
                console.log("No seleccionaste nada");
                return;
            }

            let query = text.trim();

            // Detectar si es URL simple
            let isUrl = /^(https?:\/\/|www\.|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/.test(query);

            let finalUrl;

            if (isUrl) {
                // Asegurar protocolo
                if (!query.startsWith("http")) {
                    finalUrl = "https://" + query;
                } else {
                    finalUrl = query;
                }
            } else {
                // Búsqueda normal
                finalUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }

            chrome.tabs.create({
                url: finalUrl
            });

        } catch (error) {
            console.error("Error ejecutando script:", error);
        }
    }
});
