/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import propTypes from 'prop-types';
import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState('March 12, 2002-6:00pm');
  const [endDate, setEndDate] = useState('March 12, 2002-8:00pm');
  const [type, setType] = useState(null);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const [dayNight, setDayNight] = ('AM');

  const changeDayNight = (value) => {
    setDayNight(value);
  };

  const changeStartDate = (value) => {
    setStartDate(value);
  };
  const changeEndDate = (value) => {
    setEndDate(value);
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
      hour,
      setHour,
      minute,
      setMinute,
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
