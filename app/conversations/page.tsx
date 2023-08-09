"use client";
import React, { useState } from "react";
import axios from "axios";

const openAIKey = "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";
function App() {
  const [message, setMessage] = useState("");
  const [botReply, setBotReply] = useState("");

  const handleChat = async () => {
    debugger;
    try {
      const response = await axios.post("/api/chat", {
        message,
      });

      setBotReply(response.data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-96 mt-12 mx-14">
      <h1 className="text-white">Chat Bot</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleChat}>Send</button>
      </div>
      <p>{botReply}</p>
    </div>
  );
}

export default App;
