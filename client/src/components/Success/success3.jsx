import React from 'react';
import VideoSilver from '../../assets/silvervideo.mp4'
import style from './success.module.css'

const SubscriptionSuccess3 = () => { 
  return (
        <div className={style.div2} >
            <video className={style.videoContainer} autoPlay muted loop>
                  <source src={VideoSilver} type="video/mp4" />
            </video>

        </div>
  );
};

export default SubscriptionSuccess3 ;