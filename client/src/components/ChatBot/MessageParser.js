class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("memberships")) {
      this.actionProvider.handleMemberships();
    }
    if (lowerCaseMessage.includes("location")) {
      this.actionProvider.handleLocation();
    }
    if (lowerCaseMessage.includes("facilities")) {
      this.actionProvider.handleFacilities();
    }
    if (lowerCaseMessage.includes("classes")) {
      this.actionProvider.handleClasses();
    }
    if (lowerCaseMessage.includes("schudle")) {
      this.actionProvider.handleSchudle();
    }
    if (lowerCaseMessage.includes("opening")) {
      this.actionProvider.handleSchudle();
    } else {
      this.actionProvider.handleOptions();
    }
  }
}
export default MessageParser;