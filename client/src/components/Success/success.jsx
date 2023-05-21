import React from 'react';
import VideoPlatino from '../../assets/platinovideo.mp4'
import style from './success.module.css'

const SubscriptionSuccess = () => { 
  return (
        <div className={style.div2} >
            <video className={style.videoContainer} autoPlay muted loop>
                  <source src={VideoPlatino} type="video/mp4" />
            </video>

        </div>
  );
};

export default SubscriptionSuccess;