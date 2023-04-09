import React from 'react';
import styles from './Card.module.scss';

function Card({onFavourite, cardInfo, onPlus, onDelete, isAdd = false, liked = false, unliked}) {
  const onClickPlus = () => {
    if(isAdd){
      onDelete(cardInfo.id);
    }else{
      onPlus(cardInfo);
    }
  };

  const onLike = () => {
    if(liked){
      unliked(cardInfo.id)
    }else{
      onFavourite(cardInfo)
    }
  }
  return (
    <div className={styles.card}>
      <div 
        className={styles.favourite} 
       
      >
        <img  className='cu-p' onClick={onLike} src={!liked ? "/img/heart-unliked.svg" : "/img/heart-liked.svg"} alt="Unliked"></img>
      </div>
      <img width={133} height={112} src={cardInfo.imageUrl} alt="Sneakers" />
      <h5>{cardInfo.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{cardInfo.price.toLocaleString()} ₸</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdd ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        ></img>
      </div>
    </div>
  );
}
export default Card;
