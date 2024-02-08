import React, { Suspense, useCallback, useEffect, useState } from 'react';
const YoutubeCard = React.lazy(()=>import('./YoutubeCard')) 
import { fetchChannelYoutube, fetchFromYoutube } from '../../utils/api';
import Loader from '../Loader/Loader';
import YoutubeHead from './YoutubeHead';

const Youtube = () => {
  const [allVideo, setAllVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [channelData,setChannelData]=useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetchFromYoutube();

        const result = data.items.map((doc) => {
          if (doc.id && doc.id.videoId) {
            return {
              ...doc,
              Videolink: 'https://www.youtube.com/embed/' + doc.id.videoId,
            };
          }
          return null; 
        });

        const filteredResult = result.filter(Boolean);
        setAllVideo(filteredResult);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data from YouTube', error);
        setLoading(false); 
      }
    };

    fetchVideos();
  }, []);
  
  useEffect(()=>{

    const fetchChannelData = async () => {
        try {
          const data = await fetchChannelYoutube();
  
          const result = data.items.map((doc) => ({
                ...doc.statistics
          }));
          setChannelData(result);

        } catch (error) {
          console.error('Error fetching data from YouTube', error);
        }
      };
      fetchChannelData();

  },[])
    
  return (
    <div className='mx-auto'>
      <h1 className='text-center font-bold text-purple-700 mb-20 text-2xl'>
        Youtube Channel
      </h1>


    { allVideo.length ?

      <YoutubeHead
      subscribers={channelData[0]?.subscriberCount || 0}
      videoCount={channelData[0]?.videoCount || 0}
      viewCount={channelData[0]?.viewCount || 0}
      />
    :""
    }
      {loading ? (
        <div className='flex items-center justify-center'>
          <div className='animate-spin rounded-full border-t-2 border-b-2 border-purple-700 h-12 w-12'></div>
        </div>
      ) : (
       <div className='flex flex-wrap overflow-hidden'>
        
          <Suspense fallback={<Loader/>}>
          {
           
            allVideo.length ?
            allVideo?.map((item) => (
            <YoutubeCard key={item.id.videoId} title={item.snippet.title} link={item.Videolink} />
          ))
          :<h1 className='text-red-600 text-md'>Api Limit Reached !</h1>
          }
          </Suspense>

        </div>
      )}

    </div>
  
  
    );
        
};

export default Youtube;
