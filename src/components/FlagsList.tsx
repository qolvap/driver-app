import React from 'react';

const FlagList: React.FC = () => {

  const trasaPlUk = [
    { name: 'Germany', emoji: '🇩🇪' },
    { name: 'Nederlands', emoji: '🇳🇱' },
    { name: 'Belgium', emoji: '🇧🇪' },
    { name: 'France', emoji: '🇫🇷' },
    { name: 'United Kindom', emoji: '🇬🇧' },
  ];

  const trasaPlEs = [
    { name: 'Germany', emoji: '🇩🇪' },
    { name: 'Nederlands', emoji: '🇳🇱' },
    { name: 'Belgium', emoji: '🇧🇪' },
    { name: 'France', emoji: '🇫🇷' },
    { name: 'Spain', emoji: '🇪🇸' },
  ];

  return (
    <div>
      <h2>Trasa Pl - De</h2>
      <ul>
        {trasaPlUk.map((flag) => (
          <li key={flag.name}>
            {flag.name} {flag.emoji}
          </li>
        ))}
      </ul>

      <h2>Trasa Pl - Es</h2>
      <ul>
        {trasaPlEs.map((flag) => (
          <li key={flag.name}>
            {flag.name} {flag.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlagList;
