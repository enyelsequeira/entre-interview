/* eslint-disable comma-dangle */
import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import { GlobalContext } from '../../contexts/globalContext';
import { useTimeContext } from '../../contexts/timePickerContext';
import months from '../../helpers/helper';
import {
  CalendarButtons, CalendarHeader, Selected, TimePickers
} from '../index';
import styles from './Calendar.module.scss';

const Calendars = () => {
  const {
    changeStartDate, type, changeEndDate, endDate, startDate, changeDayNight
  } = useContext(GlobalContext);

  const {
    startHour,
    startMinute,
    endHour,
    endMinute,
    incrementStartHour,
    incrementEndMinute,
    incrementStartMinute,
    incrementEndHour,
    decrementEndHour,
    decrementEndMinute,
    decrementStartHour,
    decrementStartMinute,
  } = useTimeContext();

  const [value, onChange] = useState(new Date());

  const startTime = `${startHour}:${startMinute}`;
  const endTime = `${endHour}:${endMinute}`;

  const onChanged = () => {
    if (type === 'start') {
      changeStartDate(`${months[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`, startTime);
    } else if (type === 'end') {
      changeEndDate(`${months[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`, endTime);
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
        {type === 'start' && <TimePickers hour={startHour} minute={startMinute} incrementHour={incrementStartHour} incrementMinute={incrementStartMinute} decrementHour={decrementStartHour} decrementMinute={decrementStartMinute} changeDayNight={changeDayNight} />}

        {type === 'end' && <TimePickers hour={endHour} minute={endMinute} incrementHour={incrementEndHour} incrementMinute={incrementEndMinute} decrementHour={decrementEndHour} decrementMinute={decrementEndMinute} changeDayNight={changeDayNight} />}

      </div>

      {type === 'start' && (
      <>
        <Selected title="start date" date={startDate} time={startTime} />
        <Selected title="selected time" time={startTime} />
      </>
      )}

      {type === 'end' && (
      <>
        <Selected title="end date" date={endDate} time={endTime} />
        <Selected title="selected time" time={endTime} />
      </>
      )}

      <CalendarButtons />

    </div>
  );
};
export default Calendars;
