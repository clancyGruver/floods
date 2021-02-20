import React, { useState } from "react";
import '../../utils/fontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from 'react-datepicker';
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.min.css';

registerLocale('ru', ru)

const Menu = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
  <div className="row d-flex justify-content-around mb-2">
    <button type="button" className="btn btn-info"><FontAwesomeIcon icon={['fas', 'globe-europe']} />Обстановка</button>
    <div className="datepicker-container">
      <DatePicker
        locale="ru"
        selected={startDate}
        onChange={date => {
          console.log(date);
          setStartDate(date);
        }}
        showYearPicker
        dateFormat="yyyy"
        yearItemNumber={10}
      />
    </div>
    <button type="button" className="btn btn-info"><FontAwesomeIcon icon={['fas', 'plus']} />Добавить</button>
  </div>
  );
};

export default Menu;