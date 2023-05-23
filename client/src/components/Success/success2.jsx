import React, { useEffect } from "react";
import VideoGold from "../../assets/goldvideo.mp4";
import style from "./success.module.css";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { putUser } from "../../redux/Actions";
import { send } from "@emailjs/browser";

const SubscriptionSuccess2 = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const service_ID = "service_e9n2sqh";
  const template_ID = "template_34yu2wu";
  const public_key = "vc3WZfsRXvECr-E7P";
  const template_params = {
    name: user?.nombre,
    user_email: user?.email,
  };

  useEffect(() => {
    dispatch(putUser(user?.email, { tipoDeSuscripcion: "Gold" }));
    return send(service_ID, template_ID, template_params, public_key);
  }, [dispatch, user?.email]);

  return (
    <div className={style.div2}>
      <video className={style.videoContainer} autoPlay muted loop>
        <source src={VideoGold} type="video/mp4" />
      </video>
    </div>
  );
};

export default SubscriptionSuccess2;
