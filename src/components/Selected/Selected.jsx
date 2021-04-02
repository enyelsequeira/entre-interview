/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import styles from './Selected.module.scss';

const Selected = ({
  start, end, calendarSelected,
  calendarSelectedTime, calendarSelectedHour,
}) => {
  const {
    openModal, startDate, endDate, hour, minute,
  } = useContext(GlobalContext);
  const time = `${hour}:${minute}`;
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p className={styles.title}>{calendarSelected || start}</p>
        <input className={styles.subTitle} onClick={() => openModal('start')} value={`${startDate}-${time}` || `${endDate}`} />
      </div>
      <div className={styles.time}>
        <p className={styles.title}>{calendarSelectedTime || end}</p>
        <input className={styles.subTitle} onClick={() => openModal('end')} value={calendarSelectedHour || `${endDate}${time}`} />
      </div>
    </div>
  );
};

export default Selected;
