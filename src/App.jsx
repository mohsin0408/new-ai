import React, { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import GeminiApi from "./GeminiApi";

const App = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const handleInputMessage = async () => {
    const updatedMessages = [...message, { from: "user", text: input }];
    setMessage(updatedMessages);
    setInput("");

    try {
      const response = await GeminiApi(input);
      const reply =
        response?.candidates?.[0]?.content?.parts?.[0]?.text || "no reply";

      setMessage((prev) => [...prev, { from: "gemini", text: reply }]);
    } catch (error) {
      setMessage((prev) => [
        ...prev,
        { from: "gemini", text: " Bhai nahi pata." },
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <ChatMessage message={message} />
      <ChatInput
        input={input}
        setInput={setInput}
        handleInputMessage={handleInputMessage}
      />
    </div>
  );
};

export default App;
