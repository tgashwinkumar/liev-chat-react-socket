import React, { useState, useRef, useEffect } from "react";
import "./styles/tailwind.output.css";
import useChat from "./useChat";

const App = () => {
  const [broadcastMsg, setbroadcastMsg] = useState("");
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="w-full lg:w-[60%] border-2 border-blue h-full lg:h-[90%] shadow-lg shadow-blue-400 flex flex-col ">
        {/* Output */}
        <div className="flex-1 divide-y-2 overflow-y-auto">
          {messages.map((message, i) => (
            <ChatOutput key={i} message={message.body} user={message.user_id} />
          ))}
        </div>
        <p className="text-sm text-gray-400 px-4 py-2">{broadcastMsg}</p>
        <div className="h-20 p-4 w-full flex space-x-2 items-center">
          <input
            type="text"
            className="px-4 py-2 appearance-none w-full h-full bg-blue-100 rounded-full"
            placeholder="Type here"
            value={newMessage}
            onChange={handleNewMessageChange}
          />
          <button onClick={e => handleSendMessage(e)} className="bg-blue-500 px-4 py-2 rounded-full text-white h-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatOutput = ({ user, message }) => {
  return (
    <div className="w-full h-fit p-4">
      <p className="font-bold text-sm text-blue-500">{user}</p>
      <p className="">{message}</p>
    </div>
  );
};

export default App;
