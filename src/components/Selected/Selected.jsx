/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import styles from './Selected.module.scss';

const Selected = ({
  day, start, end, calendarSelected,
  calendarSelectedTime, calendarSelectedDay, calendarSelectedHour,
}) => {
  const {
    openModal, startDate, endDate, hour, minute,
  } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p className={styles.title}>{calendarSelected || start}</p>
        <p className={styles.subTitle} onClick={() => openModal('start')}>{calendarSelectedDay || startDate}</p>
      </div>
      <div className={styles.time}>
        <p className={styles.title}>{calendarSelectedTime || end}</p>
        <p className={styles.subTitle} onClick={() => openModal('end')}>{calendarSelectedHour || endDate}</p>
      </div>
    </div>
  );
};

export default Selected;
