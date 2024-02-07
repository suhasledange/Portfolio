import React, { useState } from 'react';
import { Ylogo } from '../../assets';
import ReactPlayer from 'react-player/lazy';
import Loader from '../Loader/Loader';

const YoutubeCard = ({ title, link }) => {
  const [isPlayerReady, setPlayerReady] = useState(false);

  const handlePlayerReady = () => {
    setPlayerReady(true);
  };

  return (
    <div className='lg:w-72 md:w-80 w-96 mx-auto mb-24 lg:h-40 md:h-44 h-48'>
      <div className='mx-auto w-full h-full'>

      {!isPlayerReady && <div className='flex items-center justify-center bg-black w-full h-full'>
          <div className='animate-spin rounded-full border-t-2 border-b-2 border-purple-700 h-12 w-12'></div>
        </div>}
      <ReactPlayer width="100%"
        height="100%"
        url={link}
        onReady={handlePlayerReady}
        />
      </div>

      <div className='flex items-center space-x-4 mt-2'>
        <div className='w-10 h-10'>
          <img className='w-full h-full object-contain' src={Ylogo} alt='YouTube Logo' />
        </div>
        <h1 className='text-md font-normal text-gray-700 dark:text-gray-200'>
          {title.substr(0, 48)}...
        </h1>
      </div>
    </div>
  );
};

export default YoutubeCard;
