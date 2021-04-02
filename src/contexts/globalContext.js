/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import propTypes from 'prop-types';
import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState('March 12, 2020');
  const [endDate, setEndDate] = useState('March 12, 2021');
  const [type, setType] = useState(null);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const [dayNight, setDayNight] = ('AM');

  const changeDayNight = (value, time) => {
    setDayNight(value, time);
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

  // useEffect(() => {
  //   // changeStartDate();
  //   // changeEndDate();
  // }, [changeStartDate]);

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
