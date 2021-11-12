import React from 'react';

const Des = ({ history }) => {
  const pushHome = () => {
    history.push('/home')
  }
  return (
    <div>
      des
      <div onClick={pushHome}>go home</div>
    </div>
  );
  }

export default Des;
    