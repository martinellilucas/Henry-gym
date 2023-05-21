import React from 'react';
import PagoCancelado from '../../assets/pagocancelado.png'
import style from './cancel.module.css'

const SubscriptionCancel = () => { 
  return (
        <div>
            <img src={PagoCancelado} alt="pagocancelado" className={style.imagen} />
        </div>
  );
};

export default SubscriptionCancel;