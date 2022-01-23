import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Introduction = () => {
  return (
    <div style={{ maxWidth: '1130px', margin: '50px auto' }}>
      <h3
        style={{ textAlign: 'center', fontSize: '3rem', margin: '100px 0 50px', fontWeight: '700' }}
      >
        What is Room Escape?
      </h3>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Fade direction="down">
            <div style={{ margin: '20px 0' }}>Room Escape</div>
          </Fade>
          <Fade direction="left">
            <div style={{ fontSize: '2.5rem' }}>
              세상의 <br />
              모든 방탈출
            </div>
          </Fade>
          <Fade direction="up">
            <div style={{ margin: '20px 0', fontSize: '1.2rem' }}>
              AI를 통해 <br />
              누구나 언제 어디서든 <br />
              방탈출에 대해 알아보세요.
            </div>
          </Fade>
          <button style={{ border: '1px solid black', background: 'none' }}>Room Escape</button>
        </div>

        <Zoom
          style={{
            flex: 1,
            height: '500px',
            borderRadius: '100px',
            // background: 'rgb(56, 112, 216)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '10rem',
            color: '#fff',
          }}
        >
          <video
            src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_7b067af2fcf8f5853d11c2a4b977b40e.mp4"
            // src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_408f8f4ea825ce76776b436a6e766422.mp4"
            height="500px"
            controls
          />
        </Zoom>
      </div>
    </div>
  );
};

export default Introduction;
