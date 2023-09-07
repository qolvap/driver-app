import React, { useState } from 'react';
import data from './data.tsx';
import './styles/FlagList.css';

interface Flag {
  id: number;
  name: string;
  emoji: string;
}

const FlagList: React.FC = () => {
  const [clickedEmojis, setClickedEmojis] = useState<{ emoji: string; timestamp: string }[]>([]);
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [isRouteStarted, setIsRouteStarted] = useState(false);

  const handleStartClick = () => {
    setIsRouteStarted(true);

    if (!clickedEmojis.length) {
      const currentTime = new Date().toLocaleString('pl-PL', {
        timeZone: 'Europe/Warsaw',
      });
      setClickedEmojis((prevEmojis) => [...prevEmojis, { emoji: 'START', timestamp: currentTime }]);
    }
  };

  const handleEndClick = () => {
    if (isRouteStarted) {
      const currentTime = new Date().toLocaleString('pl-PL', {
        timeZone: 'Europe/Warsaw',
      });
      setClickedEmojis((prevEmojis) => [...prevEmojis, { emoji: 'END', timestamp: currentTime }]);
      setIsRouteStarted(false);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    if (!isRouteStarted) {
      return;
    }

    const currentTime = new Date().toLocaleString('pl-PL', {
      timeZone: 'Europe/Warsaw',
    });

    if (emoji === data.trasaPlUk[currentEmojiIndex].emoji) {
      setClickedEmojis((prevEmojis) => [...prevEmojis, { emoji, timestamp: currentTime }]);
      setCurrentEmojiIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flag-list-section">
      <div className="flag-row">
        <h2>Trasa Pl - De</h2>
        <button className="start-route" onClick={handleStartClick}>
          START
        </button>
        <ul>
          {data.trasaPlUk.map((flag, index) => (
            <li
              key={flag.id}
              onClick={() => handleEmojiClick(flag.emoji)}
              className={index === currentEmojiIndex ? 'active' : ''}
            >
              {flag.emoji}
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <h4>
              {clickedEmojis.map((clickedEmoji, index) => (
                <div key={index}>
                  {clickedEmoji.emoji},{' '}
                  <strong>Дата та час натиску:</strong> {clickedEmoji.timestamp}
                </div>
              ))}
            </h4>
          </li>
        </ul>
        <button className="end-route" onClick={handleEndClick}>
          END
        </button>
      </div>
      <div></div>
      <div className="flag-row">
        <h2>Trasa Pl - Es</h2>
        <button className="start-route" onClick={handleStartClick}>
          START
        </button>
        <ul>
          {data.trasaPlEs.map((flag, index) => (
            <li
              key={flag.id}
              onClick={() => handleEmojiClick(flag.emoji)}
              className={index === currentEmojiIndex ? 'active' : ''}
            >
              {flag.emoji}
            </li>
          ))}
        </ul>
        <button className="start-route" onClick={handleStartClick}>
          START
        </button>
      </div>
    </div>
  );
};

export default FlagList;





