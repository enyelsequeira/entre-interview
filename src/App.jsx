import React, { useContext } from 'react';
import Modal from 'react-modal';
import styles from './App.module.scss';
import Calendar from './components/Calendar/Calendar';
import Selected from './components/Selected/Selected';
import { GlobalContext } from './contexts/globalContext';
import { useTimeContext } from './contexts/timePickerContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F2F2F2',
    opacity: '0.7',
  },
};

function App() {
  const {
    modalIsOpen, closeModal, startDate, openModal,
    endDate, dayNight,
  } = useContext(GlobalContext);
  const {
    startHour,
    startMinute,
    endHour,
    endMinute,
  } = useTimeContext();

  const startTime = `${startHour}:${startMinute}:${dayNight}`;
  const endTime = `${endHour}:${endMinute}:${dayNight}`;

  return (
    <div className={styles.container}>

      <Selected title="start date" date={startDate} time={startTime} openFunc={() => openModal('start')} />

      <Selected title="end date" date={endDate} time={endTime} openFunc={() => openModal('end')} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <Calendar />

      </Modal>
    </div>
  );
}

export default App;
