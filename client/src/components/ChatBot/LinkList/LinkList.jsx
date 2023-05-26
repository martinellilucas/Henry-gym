import React from "react";

import style from "./LinkList.module.css";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className={style.linkListItem}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={style.url}
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className={style.linkList}>{linkMarkup}</ul>;
};

export default LinkList;
