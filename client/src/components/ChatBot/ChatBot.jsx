import style from "./ChatBot.module.css";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import { FaAndroid } from "react-icons/fa";

const ChatBot = () => {
  const displayChat = () => {
    if (document.getElementById("chat").style.display === "none")
      document.getElementById("chat").style.display = "block";
    else {
      document.getElementById("chat").style.display = "none";
    }
  };
  return (
    <div className={style.body}>
      <div className={style.chat} id="chat">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>

      <button onClick={displayChat}>
        <div className={style.btnContainer}>
          <FaAndroid size={40} color=" rgb(10, 10, 10, 0.6)" />
          <span className={style.span}>ChatBot</span>
        </div>
      </button>
    </div>
  );
};

export default ChatBot;
