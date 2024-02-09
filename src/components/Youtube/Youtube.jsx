import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { fetchChannelYoutube, fetchFromYoutube } from '../../utils/api';
import Loader from '../Loader/Loader';
import YoutubeHead from './YoutubeHead';
const YoutubeCard = React.lazy(() => import('./YoutubeCard'));
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Youtube = () => {
  const [allVideo, setAllVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(9);

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

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const data = await fetchChannelYoutube();

        const result = data.items.map((doc) => ({
          ...doc.statistics,
        }));
        setChannelData(result);
      } catch (error) {
        console.error('Error fetching data from YouTube', error);
      }
    };
    fetchChannelData();
  }, []);

  const totalPages = Math.ceil(allVideo.length / videosPerPage);

  const paginate = (action) => {

    const videosSection = document.getElementById('videosSection');

    if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (typeof action === 'number') {
      setCurrentPage(action);
    }

    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = allVideo.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className='mx-auto'>
      <h1 className='text-center font-bold text-purple-700 mb-20 text-2xl'>
        Youtube Channel
      </h1>

      {allVideo.length ? (
        <YoutubeHead
          subscribers={channelData[0]?.subscriberCount || 0}
          videoCount={channelData[0]?.videoCount || 0}
          viewCount={channelData[0]?.viewCount || 0}
        />
      )
        : (
          ''
        )}

      {loading ? (
        <div className='flex items-center justify-center'>
          <div className='animate-spin rounded-full border-t-2 border-b-2 border-purple-700 h-12 w-12'></div>
        </div>
      ) : (
        <div id="videosSection" className='flex flex-wrap overflow-hidden'>
          <Suspense fallback={<Loader />}>
            {currentVideos.length ? (
              currentVideos.map((item) => (
                <YoutubeCard
                  key={item.id.videoId}
                  title={item.snippet.title}
                  publishedAt={item.snippet.publishedAt}
                  link={item.Videolink}
                />
              ))
            ) : (
              <h1 className='text-red-600 text-md mx-auto'>Api Limit Reached !</h1>
            )}
          </Suspense>
        </div>
      )}

      {allVideo.length ? (
        <div className='pagination flex items-center justify-center space-x-10 mt-10'>
          <button onClick={() => paginate('prev')} disabled={currentPage === 1}>
            <FaArrowAltCircleLeft className={`text-4xl text-purple-700 ${currentPage === 1 ? "text-purple-500" : "text-purple-700"}`} />
          </button>

          <button
            onClick={() => paginate('next')}
            disabled={currentPage === totalPages}
          >
            <FaArrowAltCircleRight className={`text-4xl text-purple-700 ${currentPage === totalPages ? "text-purple-500" : "text-purple-700"}`} />

          </button>
        </div>

      )
        : (
          ''
        )}
    </div>
  );
};

export default Youtube;
