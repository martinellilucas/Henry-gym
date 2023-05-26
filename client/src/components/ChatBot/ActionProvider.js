class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hello, how can I help you?",
      { widget: "learningOptions" }
    );
    this.updateChatbotState(greetingMessage);
  }
  handleMemberships = () => {
    const message = this.createChatBotMessage(
      "Fantastic, we have 3 types of memberships available. The most economical is silver which allows you to access the gym for 30 days for the bodybuilding area. The most popular, the gold allows you, in addition to the bodybuilding area, to register for one of our classes. Finally, the platinum allows you to access all of the above and three classes in total!",
      { widget: "memberships" }
    );
    this.updateChatbotState(message);
  };
  handleFacilities = () => {
    const message = this.createChatBotMessage(
      "We have all the machines for bodybuilding exercises, we also have showers and changing rooms. In each class we have a teacher specialized in the area. We also have a rest area and a store for drinks and energy bars."
    );
    this.updateChatbotState(message);
  };
  handleLocation = () => {
    const message = this.createChatBotMessage(
      "We are located in 423 W 55th St, New York, NY 10019, United States"
    );
    this.updateChatbotState(message);
  };
  handleClasses = () => {
    const message = this.createChatBotMessage(
      "We have six classes available: yoga, functional, bodybuilding, crossfit, zumba and pilates. You can also acquire the silver membership and perform your own routines in the gym ",
      { widget: "classes" }
    );
    this.updateChatbotState(message);
  };
  handleSchudle = () => {
    const message = this.createChatBotMessage(
      "Opening hours: Mondays to Fridays from 6:30 to 22:30 & Saturdays from 9:00 to 12:00"
    );
    this.updateChatbotState(message);
  };
  handleOptions = () => {
    const message = this.createChatBotMessage(
      "Please choose one of this options",
      { widget: "learningOptions" }
    );
    this.updateChatbotState(message);
  };
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
