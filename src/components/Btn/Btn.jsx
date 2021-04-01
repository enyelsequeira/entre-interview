/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Btn.module.scss';

const Btn = ({ text, closeModal }) => {
  const done = text === 'Done' ? `${styles.done}` : `${styles.cancel}`;
  const classes = `${done}`;

  return (
    <>
      <button onClick={closeModal} className={`${styles.container} ${classes}`} type="button">{text}</button>
    </>
  );
};

export default Btn;
