import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { fetchFromYoutube, fetchChannelYoutube } from '../../utils/api';
import Loader from '../Loader/Loader';
import YoutubeHead from './YoutubeHead';
import YoutubeCard from './YoutubeCard'; // Assuming you have imported YoutubeCard
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Youtube = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const videosSectionRef = useRef(null);

  useEffect(() => {
    const fetchVideosAndChannelData = async () => {
      try {
        const [videoData, channelData] = await Promise.all([
          fetchFromYoutube(),
          fetchChannelYoutube()
        ]);

        const videos = videoData.items.map((video) => ({
          ...video,
          Videolink: `https://www.youtube.com/embed/${video.id.videoId}`,
        }));

        setAllVideos(videos);
        setChannelData(channelData.items[0]?.statistics || {});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from YouTube', error);
        setLoading(false);
      }
    };

    fetchVideosAndChannelData();
  }, []);

  useEffect(() => {
    if (videosSectionRef.current) {
      videosSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(allVideos.length / videosPerPage);

  const paginate = useCallback((action) => {
    setCurrentPage((prevPage) => {
      if (action === 'prev' && prevPage > 1) return prevPage - 1;
      if (action === 'next' && prevPage < totalPages) return prevPage + 1;
      if (typeof action === 'number') return action;
      return prevPage;
    });
  }, [totalPages]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className='mx-auto'>
      <h1 className='text-center font-bold text-purple-700 mb-20 text-2xl'>
        Youtube Channel
      </h1>

      <YoutubeHead
        subscribers={channelData.subscriberCount || 0}
        videoCount={channelData.videoCount || 0}
        viewCount={channelData.viewCount || 0}
      />

      {loading ? (
        <Loader />
      ) : (
            <div className='grid gap-x-3' style={{gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr)'}}>

          <Suspense fallback={<Loader />}>
            {currentVideos.length ? (
              currentVideos.map((video) => (
                <YoutubeCard
                  key={video.id.videoId}
                  title={video.snippet.title}
                  publishedAt={video.snippet.publishedAt}
                  link={video.Videolink}
                />
              ))
            ) : (
              <h1 className='text-red-600 text-md mx-auto'>Api Limit Reached !</h1>
            )}
          </Suspense>
        </div>
      )}

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
    </div>
  );
};

export default Youtube;
