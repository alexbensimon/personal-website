import React from 'react';

export default () => (
  <div className="root">
    <img src="/img/photo.jpg" alt="My face" />
    <style jsx>{`
      .root {
        text-align: center;
      }
      img {
        width: 100px;
        border-radius: 100%;
      }
    `}</style>
  </div>
);
