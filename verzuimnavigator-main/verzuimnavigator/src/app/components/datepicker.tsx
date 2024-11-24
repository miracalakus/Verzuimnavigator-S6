"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../verzuim/style.css'; // Import the custom CSS
import { format, differenceInDays, differenceInWeeks } from 'date-fns';

const DatePickerComponent: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [daysSince, setDaysSince] = useState<number | null>(null);
  const [weeksSince, setWeeksSince] = useState<number | null>(null);

  useEffect(() => {
    if (startDate) {
      const now = new Date();
      const days = differenceInDays(now, startDate);
      const weeks = differenceInWeeks(now, startDate);
      setDaysSince(days);
      setWeeksSince(weeks);
    }
  }, [startDate]);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block mb-2 text-lg font-bold">Eerste dag verzuim werknemer</label>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()} // Restrict to past dates
          className="border p-2 text-black bg-white"
          placeholderText="Kies de startdatum"
          calendarStartDay={1} // Start the week on Monday
        />
      </div>
      {startDate && (
        <div className="datePick">
          <p>Startdatum verzuim: {format(startDate, 'dd/MM/yyyy')}</p>
          <p>Dagen sinds start verzuim: {daysSince}</p>
          <p>Weken sinds start verzuim: {weeksSince}</p>
        </div>
      )}
      {weeksSince !== null && weeksSince > 8 && (
        <div className="mt-4 bg-yellow-200 text-black rounded">
          <p>In de 8e ziekteweek, of uiterlijk twee weken naar de Probleemanalyse, maakt u samen met uw medewerker een Plan van aanpak op voor de re-integratie. Dit doet u aan de hand van de Probleemanalyse die u ontvangen heeft via de bedrijfsarts of arbodienst.</p>
          <p>In het Plan van aanpak staat beschreven wat er vanuit u en uw medewerker nodig is om weer aan het werk te gaan. U geeft beide uw visie op het re-integratietraject. Deze vult u in op een digitaal formulier van het UWV en ondertekent u beide. Een kopie hiervan komt in het re-integratiedossier.</p>
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
