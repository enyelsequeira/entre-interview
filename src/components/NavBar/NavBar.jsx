/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Navbar({
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  className,
  localeUtils,
}) {
  const months = localeUtils.getMonths();
  const prev = months[previousMonth.getMonth()];
  const next = months[nextMonth.getMonth()];
  const styleLeft = {
    float: 'left',
  };
  const styleRight = {
    float: 'right',
  };
  return (
    <div className={className}>
      <button style={styleLeft} onClick={() => onPreviousClick()}>
        ←
        {' '}
        {prev.slice(0, 3)}
      </button>
      <button style={styleRight} onClick={() => onNextClick()}>
        {next.slice(0, 3)}
        {' '}
        →
      </button>
    </div>
  );
}
export default Navbar;
