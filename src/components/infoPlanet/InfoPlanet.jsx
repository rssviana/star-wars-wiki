import React from 'react';
import styles from './infoPlanet.module.sass';

import Planet from '../planet/Planet';



const InfoPlanet = props => {
  const { name, population, climate, terrain } = props;

  return (
    <div className={styles.infoPlanet}>
      <h1 className={styles.superTitle}>Star Wars</h1>
      <div className={styles.heading}>
        <h3 className={styles.planetName}>{name}</h3>
      </div>
      <div className={styles.caracteristics}>
        <Planet />
        <div>
          <p className={styles.text}>População: <strong>{population}</strong></p> 
          <p className={styles.text}>Clima: <strong>{climate}</strong></p>
          <p className={styles.text}>Terreno: <strong>{terrain}</strong></p>
        </div>
      </div> 
    </div>
  );
};

export default InfoPlanet;
