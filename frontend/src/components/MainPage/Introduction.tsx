import React from 'react';

const Introduction = () => {
  return (
    <div style={{ height: '500px', maxWidth: '1130px', display: 'flex', margin: '50px auto' }}>
      <div style={{ flex: 1 }}>
        <div style={{ margin: '20px 0' }}>Room Escape</div>
        <div style={{ fontSize: '2.5rem' }}>
          세상의 <br />
          모든 방탈출
        </div>
        <div style={{ margin: '20px 0', fontSize: '1.2rem' }}>
          AI를 통해 <br />
          누구나 언제 어디서든 <br />
          방탈출에 대해 알아보세요.
        </div>
        <button style={{ border: '1px solid black', background: 'none' }}>Room Escape</button>
      </div>
      <div
        style={{
          flex: 1,
          height: '500px',
          borderRadius: '100px',
          background: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '10rem',
          color: '#fff',
        }}
      >
        DEEP
      </div>
    </div>
  );
};

export default Introduction;
