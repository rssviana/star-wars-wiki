import React from 'react';
import styles from './buttons.module.sass';

const Buttons = (props) => {

  const { 
    dec, 
    inc, 
   } = props;

  return (
    <div className={styles.buttonsContainer}>
      <div 
        className={styles.button}
        onClick={dec}
      >
        <span>Previous</span>
      </div>
      <div 
        className={styles.button}
        onClick={inc}
      >
        <span>Next</span>
      </div>
    </div>
  );
};

export default Buttons;