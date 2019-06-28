import React from 'react';
import styles from './feedback.module.sass';

const Feedback = (props) => {
  const { type, messager } = props;

  return (
    <>
    {type === 'error' 
      ? (
        <div className={styles.feedback_error}>
          <p className={styles.messager}>Error:  { messager }</p>
        </div>
      )
      : type === 'warning'
        ? (
          <div className={styles.feedback_warning}>
            <p className={styles.messager}>{ messager }</p>
          </div>
        )
        : type === 'success'
          ? (
            <div className={styles.feedback_success}>
              <p className={styles.messager}>{ messager }</p>
            </div>
          )
          : type === 'default' && (
            <div className={styles.feedback}>
              <p className={styles.messager}>{ messager }</p>
            </div>
          )
    }
    </>
  );
};

export default Feedback;