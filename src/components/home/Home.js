import React from 'react';
import Heading from '../layout/Heading';
import MusicList from './MusicList';

function Home() {
  return (
    <>
      <Heading title="Songs" />
      <MusicList />
    </>
  )
}

export default Home