import React, { useState } from 'react';
import data from './data.tsx';
import './styles/FlagList.css';

interface Flag {
  id: number; // Додали id
  name: string;
  emoji: string;
}

const FlagList: React.FC = () => {
  const [clickedEmojis, setClickedEmojis] = useState<{ emoji: string; timestamp: string }[]>([]);

  const handleEmojiClick = (emoji: string) => {
    const currentTime = new Date().toLocaleString('pl-PL', {
      timeZone: 'Europe/Warsaw',
    });
    
    // Створюємо копію масиву натиснутих emoji та додаємо новий об'єкт з emoji та часом натиску
    setClickedEmojis((prevEmojis) => [...prevEmojis, { emoji, timestamp: currentTime }]);
  };

  return (
    <div className="flag-list-section">
      <div className="flag-row">
        <h2>Trasa Pl - De</h2>
        <button className="start-route">START</button>
        <ul>
          {data.trasaPlUk.map((flag) => (
            <li key={flag.id} onClick={() => handleEmojiClick(flag.emoji)}>
              {flag.emoji}
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <h4>
              {clickedEmojis.map((clickedEmoji, index) => (
                <div key={index}>
                  {clickedEmoji.emoji} {' '} <strong>Time of coard crossing:</strong>{' '}
                  {clickedEmoji.timestamp}
                </div>
              ))}
            </h4>
          </li>
        </ul>
        <button className="end-route">END</button>
      </div>
      <div>
      </div>
      <div className="flag-row">
        <h2>Trasa Pl - Es</h2>
        <button className="start-route">START</button>
        <ul>
          {data.trasaPlEs.map((flag) => (
            <li key={flag.id} onClick={() => handleEmojiClick(flag.emoji)}>
              {flag.emoji}
            </li>
          ))}
        </ul>
        <button className="start-route">START</button>
      </div>
    </div>
  );
};

export default FlagList;


