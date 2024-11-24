import React from 'react';
import CategoryCard from './components/CategoryCard';
import Container from './components/container';
import './globals.css';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center text-darkblue'>
        <h1 className='mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Zorg dat uw bedrijf gezond is en blijft</h1>
        <p className='mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>De Verzuimnavigator heeft de grootste verzameling informatie over  ziekteverzuim en preventie in de metaalbranche. Hier vindt u hulp om  medewerkers te begeleiden bij ziekte of om samen te werken aan een  gezonde werkplek. En als u een dienst aanschaft ter ondersteuning, dan  ontvangt u extra vergoedingen!</p>
      </div>
      <div className="px-8 pt-8">
        <div className="flex space-x-4 justify-center pb-8">
          <Container heading="Is je werknemer ziek?" text="Regel preventiemiddelen" />
          <Container heading="Verzuim van je werknemer voorkomen?" text="Bekijk de preventiemiddelen" />

        </div>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-darkblue mb-4 text-lg font-extrabold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>Meest bezocht</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <CategoryCard
            image="/ziek.png"
            title="Ziekte"
            link="/ziekte"
          />
          <CategoryCard
            image="/VeiligWerken.png"
            title="Veilig werken"
            link="/veiligwerken"
          />
          <CategoryCard
            image="/Mentaal.png"
            title="Mentaal"
            link="/mentaal"
          />
          <CategoryCard
            image="/ChronischZiek.png"
            title="Chronische ziekten"
            link="/chronischeziekten"
          />
          <CategoryCard
            image="/OnverklaardVerlof.png"
            title="Onverklaard verlof"
            link="/onverklaardverlof"
          />
        </div>
      </div>
    </>
  );
}
