import React from 'react';
import { BsCheck, BsX } from 'react-icons/bs';
import styles from './rvsp.module.scss';

const Rvsp = () => {
  const url: string = window.location.pathname;
  const splitted: string[] = url.split('/');

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <h3>Geef hier je aanwezigheid door voor:</h3>

        <h1>{splitted[2]}</h1>
        <p>Datum: {splitted[3]}</p>
        <p>Tijd: {splitted[4]}</p>
      </div>
      <div className={styles.attendance}>
        <h3>Aanwezigheid</h3>
        <div>
          <BsCheck className={styles.attButtons} />
          <BsX className={styles.attButtons} />
        </div>
      </div>
    </div>
  );
};

export default Rvsp;
