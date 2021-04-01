import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import Btn from '../Btn/Btn';
import styles from './ButtonContainer.module.scss';

const CalendarButtons = () => {
  const { closeModal } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <Btn text="Cancel" closeModal={closeModal} />
      <Btn text="Done" />

      {/* <button className={styles.cancel} type="button">Cancel</button>
    <button className={styles.done} type="button">Done</button> */}

    </div>
  );
};

export default CalendarButtons;
