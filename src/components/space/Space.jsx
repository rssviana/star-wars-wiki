import React from 'react';
import styles from './space.module.sass';

function Space() {
  return (
    <div className={styles.spaceContainer}>
      <div id={styles.stars} />
      <div id={styles.stars2} />
      <div id={styles.stars3} />
    </div>
  );
}

export default Space;