/* eslint-disable react/prop-types */
import React from 'react';

function Weekday({
  weekday, className, localeUtils, locale,
}) {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
  return (
    <div className={className} title={weekdayName}>
      {weekday}
      {' '}
      {weekdayName.slice(0, 1)}
    </div>
  );
}

export default Weekday;
