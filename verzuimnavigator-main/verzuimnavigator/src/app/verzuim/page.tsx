// src/app/page.tsx
"use client"; // Add this directive if the page uses client-side features

import React from 'react';
import DatePickerComponent from '../components/datepicker';

const Page: React.FC = () => {
  return (
    <div className="p-32">
      <h1 className="text-2xl font-bold">Verzuim</h1>
      <p>Uw medewerker meldt zich ziek en verschijnt niet op het werk. Dit hoeft niet meteen iets ernstigs te betekenen, maar u moet als werkgever wel direct enkele stappen ondernemen om het goed te regelen. </p>
      <DatePickerComponent />
    </div>
  );
};

export default Page;
