const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 5000;
const NEW_CHAT_MESSAGE_EVENT = "chat";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
