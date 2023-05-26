import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./LinkList/LinkList";

const config = {
  botName: "Henry's Gym",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "memberships",
      widgetFunc: (props) => <LinkList {...props}></LinkList>,
      props: {
        options: [
          {
            text: "Become a member now !",
            url: "https://henry-gym.onrender.com/memberships",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "classes",
      widgetFunc: (props) => <LinkList {...props}></LinkList>,
      props: {
        options: [
          {
            text: "Become a member now !",
            url: "https://henry-gym.onrender.com/memberships",
            id: 1,
          },
          {
            text: "Take a deep look on our classes",
            url: "https://henry-gym.onrender.com/clases",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
