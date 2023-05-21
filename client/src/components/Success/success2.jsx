import React from 'react';
import VideoGold from '../../assets/goldvideo.mp4'
import style from './success.module.css'

const SubscriptionSuccess2 = () => { 
  return (
        <div className={style.div2} >
            <video className={style.videoContainer} autoPlay muted loop>
                  <source src={VideoGold} type="video/mp4" />
            </video>

        </div>
  );
};

export default SubscriptionSuccess2 ;