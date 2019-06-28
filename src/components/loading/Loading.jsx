import React from 'react';
import loadingAsset from '../../static/images/loading001.gif';
import styles from './loading.module.sass';

const InfoPlanet = () => {

  return (
    <div className={styles.loadingContainer}>
      <img className={styles.loader} src={loadingAsset} alt="loading..."/>
    </div>
  );
};

export default InfoPlanet;