import React, { useEffect } from "react";

const ChatInput = ({ input, handleInputMessage, setInput }) => {
  useEffect(() => {
    const apiKey = "AIzaSyDwnibzP9tF5ntvQO8Y4TPY46mqBDgyqh8";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Explain how AI works in a few words",
              },
            ],
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "data"));
  }, []);

  return (
    <div>
      <input
        placeholder="How can I help you "
        type="text"
        className="px-5 py-2 border-black "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleInputMessage}>click</button>
    </div>
  );
};

export default ChatInput;
