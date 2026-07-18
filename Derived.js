const app_id = 1089; // Public demo app ID
const ws = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${app_id}`);

ws.onopen = () => {
    console.log("Connected to Deriv");

    ws.send(JSON.stringify({
        ticks: "R_100"
    }));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.tick) {
        document.getElementById("price").innerHTML =
            "R_100 Price: " + data.tick.quote;
    }
};
<h2>Deriv Connection</h2>
<p id="status">Connecting...</p>

<script src="derived.js"></script>
ws.onerror = (err) => {
    console.log(err);
};

ws.onclose = () => {
    console.log("Disconnected");
};
