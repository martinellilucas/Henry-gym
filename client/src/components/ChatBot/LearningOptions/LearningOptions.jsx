import React from "react";

import style from "./LearningOptions.module.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Location", handler: props.actionProvider.handleLocation, id: 1 },
    { text: "Schudle", handler: props.actionProvider.handleSchudle, id: 2 },
    {
      text: "Memberships",
      handler: props.actionProvider.handleMemberships,
      id: 3,
    },

    { text: "Classes", handler: props.actionProvider.handleClasses, id: 4 },
    {
      text: "Facilities",
      handler: props.actionProvider.handleFacilities,
      id: 5,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className={style.learning_option_button}
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div className={style.learning_options_container}>{optionsMarkup}</div>
  );
};

export default LearningOptions;
