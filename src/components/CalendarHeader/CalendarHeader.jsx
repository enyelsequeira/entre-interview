import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import styles from './CalendarHeader.module.scss';

const CalendarHeader = () => {
  const { closeModal } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h4 className={styles.title}>Set Time and Date</h4>
        <p className={styles.subtitle}>Choose the time and date to hold your event</p>
      </div>
      <button type="button" onClick={closeModal}>x</button>
    </div>
  );
};

export default CalendarHeader;
