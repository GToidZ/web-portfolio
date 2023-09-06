import './App.css';
import HomeCard from './components/HomeCard';
import './styles/my.css';

import { useState } from 'react';

function App() {

  const [page, setPage] = useState<any>(null);

  return (
    <>
      <div className='flex flex-col w-full h-full'>
        <div className='upper-container'>
          <div className='title-container'>
            <span className='text-8xl leading-normal'>Pawitchaya C.</span>
            <span className='text-3xl'>Software Engineer</span>
          </div>
        </div>
        <div className='lower-container'>
          <div className='flex flex-row w-full h-full gap-2'>
            <div className='flex basis-1/2 gap-2'>
              <HomeCard label='portfolio' faIcon='folder-open' extraClasses='bg-blue-700'/>
            </div>
            <div className='flex flex-col basis-1/2 gap-2'>
              <HomeCard label='about me' faIcon='user' extraClasses='bg-yellow-200 text-neutral-950'/>
              <HomeCard label='contact' faIcon='envelope' extraClasses='bg-neutral-100 text-neutral-950'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
