/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import { GlobalContext } from '../../contexts/globalContext';
import months from '../../helpers/helper';
import {
  CalendarButtons, CalendarHeader, Selected, TimePickers
} from '../index';
import styles from './Calendar.module.scss';

const Calendars = () => {
  const {
    changeStartDate, startDate, hour, type, changeEndDate, minute
  } = useContext(GlobalContext);

  const [value, onChange] = useState(new Date());

  const onChanged = () => {
    if (type === 'start') {
      changeStartDate(`${months[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}, ${hour}`);
    } else if (type === 'end') {
      changeEndDate(`${months[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`);
    }
  };

  return (
    <div className={styles.container}>
      <CalendarHeader />
      <div className={styles.calendarContainer}>
        <Calendar
          onChange={onChange}
          onClickDay={onChanged}
          value={value}
          className={['react-calendar']}
        />
        <TimePickers />
      </div>
      <Selected calendarSelected="selected date" calendarSelectedDay={startDate} calendarSelectedTime="selected time" calendarSelectedHour={`${hour}: ${minute}`} />
      <CalendarButtons />

    </div>
  );
};
export default Calendars;
