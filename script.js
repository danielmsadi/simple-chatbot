async function sendMessage() {
    let input = document.getElementById("input");
    let message = input.value;

    let res = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    let data = await res.json();

    document.getElementById("response").innerText = data.reply;

    input.value = "";
}