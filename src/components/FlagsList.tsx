import React from 'react';
import  data   from './data.tsx'; 
import './styles/FlagList.css';

interface Flag {
  name: string;
  emoji: string;
}

const FlagList: React.FC = () => {
  return (
    <div className='flag-list-section'>
      <div className='flag-row'>
      <h2>Trasa Pl - De</h2>
      <button className='start-route'>START</button>
      <ul>
        {data.trasaPlUk.map((flag) => (
          <li key={flag.emoji}>
            {flag.emoji}
          </li>
        ))}
      </ul>
      <button className='end-route'>END</button>
      </div>
      <div className='flag-row'>
      <h2>Trasa Pl - Es</h2>
      <button className='start-route'>START</button>
      <ul>
        {data.trasaPlEs.map((flag) => (
          <li key={flag.emoji}>
           {flag.emoji}
          </li>
        ))}
      </ul>
      <button className='start-route'>START</button>
      </div>
    </div>
  );
};

export default FlagList;

