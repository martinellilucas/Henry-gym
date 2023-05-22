import React, { useEffect } from "react";
import VideoPlatino from "../../assets/platinovideo.mp4";
import style from "./success.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { putUser } from "../../redux/Actions/index";

const SubscriptionSuccess = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(putUser(user.email, { tipoDeSuscripcion: "Platinum" }));
  }, [dispatch, user.email]);
  return (
    <div className={style.div2}>
      <video className={style.videoContainer} autoPlay muted loop>
        <source src={VideoPlatino} type="video/mp4" />
      </video>
    </div>
  );
};

export default SubscriptionSuccess;
