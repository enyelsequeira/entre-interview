import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import Btn from '../Btn/Btn';
import styles from './ButtonContainer.module.scss';

const CalendarButtons = () => {
  const { closeModal } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <Btn text="Cancel" calendar closeModal={closeModal} />
      <Btn text="Done" calendar closeModal={closeModal} />

    </div>
  );
};

export default CalendarButtons;
