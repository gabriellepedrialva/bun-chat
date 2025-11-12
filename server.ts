Bun.serve({
    fetch(req, server) {
        if (server.upgrade(req)) return;
        return new Response("WebSocket upgrade failed", { status: 400 });
    },

    websocket: {
        open(ws) {
            console.log("Socket opened");
        },

        message(ws, message) {
            console.log("Received:", message);
            ws.send("Hello from server");
        },

        close(ws) {
            console.log("Socket closed");
        },

        drain(ws) {
            console.log("Socket ready for more data");
        },
    },
});

console.log("WebSocket server running...");