import React, { useState } from 'react';
import { Ylogo } from '../../assets';
import ReactPlayer from 'react-player/lazy';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

const YoutubeCard = ({ title, link, publishedAt}) => {
  const [isPlayerReady, setPlayerReady] = useState(false);

  const handlePlayerReady = () => {
    setPlayerReady(true);
  };

  const playerStyle = {
    borderRadius: '6px',
    overflow: 'hidden',
  };

  const dateObject = parseISO(publishedAt);

  const Publish = formatDistanceToNow(dateObject, { addSuffix: true });

  return (
    <div className='mx-auto lg:w-auto md:w-auto w-full m-5'>

    <div className='mx-auto bg-black p-3 rounded-md'>
    <div className='lg:w-72 md:w-80 w-full mx-auto mb-24 lg:h-40 md:h-44 h-44'>

      <div className='w-full h-full overflow-hidden'>

        {!isPlayerReady && <div className='flex items-center justify-center bg-black w-full h-full overflow-hidden '>
          <div className='custom-pulse bg-gray-800 rounded-md h-full w-full'></div>
        </div>}

        <ReactPlayer
          style={playerStyle}
          width="100%"
          height="100%"
          url={link}
          onReady={handlePlayerReady}
        />

      </div>

      <div className='flex items-center space-x-4 mt-2'>
        <div className='w-10 h-10'>

          <LazyLoadImage
            alt=""
            className='rounded-full'
            src={Ylogo}
            effect="blur" 
            threshold={200}
            width="100%"
            height="100%"
            style={{ objectFit: 'contain' }}
          />

        </div>
        <div className='space-y-1'>
        <h1 className='text-md font-normal text-gray-300 dark:text-gray-200'>
          {title.substr(0, 50)}...
        </h1>
        <p className='text-gray-500 text-base'>{Publish}</p>
        </div>

      </div>
    </div>
    </div>
    </div>

  );
};

export default YoutubeCard;
