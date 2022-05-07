import React, { createContext, useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "chat"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:5000";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]); // Sent and received messages

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        user_id: message.senderId,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return (
    <SocketContext.Provider value={{ messages, sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
