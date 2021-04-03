/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styles from './TimePicker.module.scss';

const TimePickers = ({
  hour, minute, incrementHour, incrementMinute, decrementHour, decrementMinute, changeDayNight,
}) => (
  <div className={styles.container}>
    <div className={styles.timeContainer}>
      <div className={styles.hours}>
        <button onClick={incrementHour} type="button">
          <RiArrowUpSLine />

        </button>
        <input type="number" value={hour} />
        <button onClick={decrementHour} type="button"><RiArrowDownSLine /></button>
      </div>

      <div className={styles.hours}>
        <button type="button" onClick={incrementMinute}><RiArrowUpSLine /></button>
        <input type="number" value={minute} />
        <button type="button" onClick={decrementMinute}><RiArrowDownSLine /></button>
      </div>

    </div>

    <ul className={styles.times}>
      <button type="button" onClick={(e) => changeDayNight(e.target.innerHTML)}>Am</button>
      <button type="button" onClick={(e) => changeDayNight(e.target.innerHTML)}>Pm</button>
    </ul>

  </div>
);

export default TimePickers;
