import React from 'react';
import styles from './DestinationItem.module.css';

const DestinationItem = ({ d }) => {
  return (
    <div className={styles.itemArea}>
      <img
        alt={d.name}
        src={require('../../../assets/destinations/' + d.spotImage).default}
      />
      <h1>{d.name}</h1>
      <h5>{d.description}</h5>
    </div>
  );
};

export default DestinationItem;
