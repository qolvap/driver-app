import React from 'react';

const CopyrightNotice: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Отримуємо поточний рік
  
    return (
      <div>
        <p>&copy; {currentYear}</p>
      </div>
    );
  };
  
  export default CopyrightNotice;