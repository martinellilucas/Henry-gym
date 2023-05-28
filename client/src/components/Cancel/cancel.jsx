import React from "react";
import PagoCancelado from "../../assets/pagocancelado.png";
import style from "./cancel.module.css";

const SubscriptionCancel = () => {
  return (
    <div className={style.imgContainer}>
      <img src={PagoCancelado} alt="pagocancelado" className={style.imagen} />
    </div>
  );
};

export default SubscriptionCancel;
