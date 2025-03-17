import React from "react";
import styles from "./Chat.module.css";

const Chat = ({ chatHistory }) => {
  return (
    <div className={styles.ChatContainer}>
      <h3>AI Chatbot</h3>
      <div className={styles.ChatMessages}>
        {chatHistory.length === 0 ? (
          <p>No messages yet. Start a conversation!</p>
        ) : (
          chatHistory.map((chat, index) => (
            <div key={index} className={styles.ChatMessage}>
              <strong>{chat.user}: </strong> {chat.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Chat; // ✅ FIXED DEFAULT EXPORT
