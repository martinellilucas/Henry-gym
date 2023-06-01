import React, { useEffect } from "react";
import VideoSilver from "../../assets/silvervideo.mp4";
import style from "./success.module.css";
import { putUser } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { send } from "@emailjs/browser";

const SubscriptionSuccess3 = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const service_ID = "service_t2k00jf";
  const template_ID = "template_952rpqy";
  const public_key = "v5Bs8FpiH_zC1zHht";

  const template_params = {
    name: user?.nombre,
    user_email: user?.email,
  };

  useEffect(() => {
    dispatch(putUser(user?.email, { tipoDeSuscripcion: "Silver" }));
    send(service_ID, template_ID, template_params, public_key);
  }, [dispatch, user?.email]);

  return (
    <div className={style.div2}>
      <video className={style.videoContainer} autoPlay muted loop>
        <source src={VideoSilver} type="video/mp4" />
      </video>
      <a href="/home" className={style.button}>
        HOME
      </a>
    </div>
  );
};

export default SubscriptionSuccess3;
