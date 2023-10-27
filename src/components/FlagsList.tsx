import React, { useState } from 'react';
import data from './data.tsx';
import './styles/FlagList.css';
import './styles/Btns.css';

interface Flag {
  id: number;
  name: string;
  emoji: string;
}

const FlagList: React.FC = () => {
  const [clickedEmojis, setClickedEmojis] = useState<{ emoji: string; timestamp: string }[]>([]);
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [isRouteStarted, setIsRouteStarted] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [submittedComment, setSubmittedComment] = useState<string | null>(null);
  const [comments, setComments] = useState<string[]>([]); 

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

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]); // Add the current comment to the comments array
      setComment('');
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
        <h2>Trasa PL - UK</h2>
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
        <ul className='entered-countries-list'>
          <li>
            <h4>
              {clickedEmojis.map((clickedEmoji, index) => (
                <div key={index}>
                  {clickedEmoji.emoji},{' '} 
                  <strong>Border cross:</strong> {clickedEmoji.timestamp}
                </div>
              ))}
            </h4>
          </li>
        </ul>
        
            <button className="end-route" onClick={handleEndClick}>
                END
            </button>
        
        <div className='input-section'>
            <input
              className='input-place'
              type="text"
              placeholder="NOTES"
              value={comment}
              onChange={handleCommentChange}
              maxlength={50}
            />
            <button className='input-btn' onClick={handleSubmitComment}>ADD</button>

        </div>
        <div className="submitted-comments">
        {comments.map((comment, index) => (
          <p key={index}>Notes: {comment}</p>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FlagList;






