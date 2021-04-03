/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import propTypes from 'prop-types';
import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState('March 12, 2020');
  const [endDate, setEndDate] = useState('March 24, 2021');
  const [type, setType] = useState(null);

  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);

  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);

  const [dayNight, setDayNight] = useState('AM');
  const [endDayNight, setEnd]
  // console.log(dayNight);

  const changeDayNight = (value) => {
    setDayNight(value);
  };

  const changeStartDate = (day, time) => {
    setStartDate(day, time);
  };
  const changeEndDate = (day, time) => {
    setEndDate(day, time);
  };

  const openModal = (type) => {
    setIsOpen(true);
    setType(type);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <GlobalContext.Provider value={{
      startDate,
      endDate,
      openModal,
      modalIsOpen,
      closeModal,
      changeEndDate,
      changeStartDate,
      startHour,
      setStartHour,
      startMinute,
      setStartMinute,
      endHour,
      setEndHour,
      endMinute,
      setEndMinute,
      dayNight,
      type,
      changeDayNight,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };

GlobalProvider.propTypes = {
  children: propTypes.element.isRequired,
};
