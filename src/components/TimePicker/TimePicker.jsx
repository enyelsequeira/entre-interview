/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useContext } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { GlobalContext } from '../../contexts/globalContext';
import styles from './TimePicker.module.scss';

const times = ['am', 'pm'];

const TimePickers = () => {
  const {
    hour, setHour, minute, setMinute,
  } = useContext(GlobalContext);

  const modifyTime = (e, type, timeType) => {
    e.preventDefault();
    if (timeType === 'hour') {
      if (type === 'increment' && hour !== 12) {
        setHour((prev) => prev + 1);
      } else if (type === 'decrement' && hour !== 0) {
        setHour((prev) => prev - 1);
      } else if (type === 'change' && e.target.value >= 0 && e.target.value <= 12) {
        setHour(Number(e.target.value));
      }
    }

    if (timeType === 'minute') {
      if (type === 'increment' && minute !== 60) {
        setMinute((prev) => prev + 1);
      } else if (type === 'decrement' && minute !== 0) {
        setMinute((prev) => prev - 1);
      } else if (type === 'change' && e.target.value >= 0 && e.target.value <= 60) {
        setMinute(Number(e.target.value));
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.timeContainer}>
        <div className={styles.hours}>
          <button onClick={(e) => modifyTime(e, 'increment', 'hour')} type="button"><RiArrowUpSLine /></button>
          <input value={hour} onChange={(e) => modifyTime(e, 'change', 'hour')} />
          <button onClick={(e) => modifyTime(e, 'decrement', 'hour')} type="button"><RiArrowDownSLine /></button>
        </div>

        <div className={styles.hours}>
          <button type="button" onClick={(e) => modifyTime(e, 'increment', 'minute')}><RiArrowUpSLine /></button>
          <input value={minute} onChange={(e) => modifyTime(e, 'change', 'minute')} />
          <button type="button" onClick={(e) => modifyTime(e, 'decrement', 'minute')}><RiArrowDownSLine /></button>
        </div>

      </div>

      <ul className={styles.times}>
        {
          times.map((t) => <button key={t} type="button">{t.toUpperCase()}</button>)
         }
      </ul>

    </div>

  );
};

export default TimePickers;
