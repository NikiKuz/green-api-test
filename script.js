function formatResponse(data) {
    // Форматируем так, чтобы всегда были скобки
    if (typeof data === "object") {
        const json = JSON.stringify(data, null, '\t');
        return `{\n${json.slice(1, -1)}\n}`;
    }
    return `{ "response": "${data}" }`;
}

async function getSettings() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const url = `https://7105.api.greenapi.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    try {
        const response = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
        const data = await response.json();
        document.getElementById("right").innerHTML = `<pre>${formatResponse(data)}</pre>`;
    } catch (error) {
        document.getElementById("right").innerHTML = `<pre>{ "error": "${error.message}" }</pre>`;
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const url = `https://7105.api.greenapi.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    try {
        const response = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
        const data = await response.json();
        document.getElementById("right").innerHTML = `<pre>${formatResponse(data)}</pre>`;
    } catch (error) {
        document.getElementById("right").innerHTML = `<pre>{ "error": "${error.message}" }</pre>`;
    }
}

async function sendMessage() {
    const idInstance = document.getElementById("idInstance").value;
    const chatId = document.getElementById("chatIdMessage").value;
    const key = document.getElementById("apiTokenInstance").value;
    const message = document.getElementById("messageText").value;
    const url = `https://7105.api.greenapi.com/waInstance${idInstance}/sendMessage/${key}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatId: chatId + "@c.us",
                message,
                typingTime: 1000,
                quotedMessageId: "osdsdjsdjklsdjkldsjklsdjkldsjksdjklsdljksdjkl",
                linkPreview: true,
                typePreview: "small"
            })
        });

        const data = await response.json();
        document.getElementById("right").innerHTML = `<pre>${formatResponse(data)}</pre>`;
    } catch (error) {
        document.getElementById("right").innerHTML = `<pre>{ "error": "${error.message}" }</pre>`;
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("chatIdMessage").value;
    const urlFile = document.getElementById("fileUrl").value;
    const fileName = urlFile.split('/').pop();
    const caption = document.getElementById("caption").value;
    const url = `https://7105.api.greenapi.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatId: chatId + "@c.us",
                urlFile,
                fileName,
                caption: caption ?? "",
                quotedMessageId: "osdsdjsdjklsdjkldsjklsdjkldsjksdjklsdljksdjkl"
            })
        });

        const data = await response.json();
        document.getElementById("right").innerHTML = `<pre>${formatResponse(data)}</pre>`;
    } catch (error) {
        document.getElementById("right").innerHTML = `<pre>{ "error": "${error.message}" }</pre>`;
    }
}
