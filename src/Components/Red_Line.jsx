import React from 'react';

const Red_Line = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '4px',
      width: '100%',
      backgroundColor: 'red',
      zIndex: 1000
    }} />
  );
};

export default Red_Line;
