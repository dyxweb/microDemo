import React from 'react';

const Home = ({ history }) => {
  const pushDes = () => {
    history.push('/des')
  }
  return (
    <div>
      home
      <div onClick={pushDes}>go des</div>
    </div>
  )
}

export default Home;
    