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
    const fetchData = async () => {
      try {
        const data = await fetchFromYoutube();

        const result = data.items.map((doc) => ({
          ...doc,
          Videolink: 'https://www.youtube.com/embed/' + doc.id.videoId,
        }));

        setAllVideo(result);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data from YouTube', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);
  
  useEffect(()=>{

    const fetchData = async () => {
        try {
          const data = await fetchChannelYoutube();
  
          const result = data.items.map((doc) => ({
            ...doc,
          }));
          setChannelData(result);
        } catch (error) {
          console.error('Error fetching data from YouTube', error);
        }
      };
      fetchData();

  },[])
  console.log(channelData)
  return (
    <div className='mx-auto'>
      <h1 className='text-center font-bold text-purple-700 mb-20 text-2xl'>
        Youtube Channel
      </h1>

    <YoutubeHead/>

      {loading ? (
        <div className='flex items-center justify-center'>
          <div className='animate-spin rounded-full border-t-2 border-b-2 border-purple-700 h-12 w-12'></div>
        </div>
      ) : (
       <div className='flex items-center flex-wrap justify-center'>
        


          <Suspense fallback={<Loader/>}>
          {
           
            allVideo.length ?
            allVideo?.map((item) => (
            <YoutubeCard key={Math.random()} title={item.snippet.title} link={item.Videolink} />
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
