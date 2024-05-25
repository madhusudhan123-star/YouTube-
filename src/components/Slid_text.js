import React from 'react';

const Slid_text = ({ text, fontSize = 36, color = 'white', waveColor = 'rgba(0, 0, 0, 0.3)' }) => {
  return (
    <div className="wave-text">
      <span style={{ fontSize, color }}>{text}</span>
      <span className="wave" />
    </div>
  );
};

export default Slid_text;
