import { useState } from "react";
import styles from "./Controls.module.css";

const Controls = ({ isDisabled, onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.ControlsContainer}>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnterPress}
        disabled={isDisabled}
        className={styles.InputBox}
      />
      <button onClick={handleSend} disabled={isDisabled} className={styles.SendButton}>
        Send
      </button>
    </div>
  );
};

export default Controls;
