const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-5 ">
      <div>
        {message.map((msg, index) => {
          return (
            <div
              key={index}
              className={
                msg.from === "user" ? "flex justify-end" : "flex justify-start"
              }>
              {msg.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatMessage;
