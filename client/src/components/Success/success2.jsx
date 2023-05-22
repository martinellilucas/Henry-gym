import React, { useEffect } from "react";
import VideoGold from "../../assets/goldvideo.mp4";
import style from "./success.module.css";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { putUser } from "../../redux/Actions";

const SubscriptionSuccess2 = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(putUser(user.email, { tipoDeSuscripcion: "Gold" }));
  }, [dispatch, user.email]);
  return (
    <div className={style.div2}>
      <video className={style.videoContainer} autoPlay muted loop>
        <source src={VideoGold} type="video/mp4" />
      </video>
    </div>
  );
};

export default SubscriptionSuccess2;
