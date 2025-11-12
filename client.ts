const ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
    ws.send('Hello WebSocket!');
};