/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Selected.module.scss';

const Selected = ({
  title, date, time, openFunc,
}) => (
  <div className={styles.container}>
    <div className={styles.date}>
      <p className={styles.title}>{title}</p>
      <input className={styles.subTitle} onClick={openFunc} value={date ? `${date}-${time}` : `${time}`} />
    </div>
  </div>
);

export default Selected;
