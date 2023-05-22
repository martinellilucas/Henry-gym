import React, { useEffect } from "react";
import VideoSilver from "../../assets/silvervideo.mp4";
import style from "./success.module.css";
import { putUser } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const SubscriptionSuccess3 = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(putUser(user?.email, { tipoDeSuscripcion: "Silver" }));
  }, [dispatch, user?.email]);
  return (
    <div className={style.div2}>
      <video className={style.videoContainer} autoPlay muted loop>
        <source src={VideoSilver} type="video/mp4" />
      </video>
    </div>
  );
};

export default SubscriptionSuccess3;
