import React, { useCallback, useEffect, useRef, useState } from 'react';
import { fetchFromYoutube, fetchChannelYoutube } from '../../utils/api';
import Loader from '../Loader/Loader';
import YoutubeHead from './YoutubeHead';
import YoutubeCard from './YoutubeCard';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Youtube = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const videosSectionRef = useRef(null);

  const fetchVideosAndChannelData = async () => {
    try {
      const [videoData, channelData] = await Promise.all([
        fetchFromYoutube(),
        fetchChannelYoutube()
      ]);

      if (videoData?.items) {
        const videos = videoData.items.map((video) => ({
          ...video,
          Videolink: `https://www.youtube.com/embed/${video.id.videoId}`,
        }));
        setAllVideos(videos);
      }

      if (channelData?.items) {
        setChannelData(channelData.items[0]?.statistics || {});
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data from YouTube', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideosAndChannelData();
  }, []);

  const totalPages = Math.ceil(allVideos.length / videosPerPage);
  const paginate = useCallback((action) => {
    setCurrentPage((prevPage) => {
      if (action === 'prev' && prevPage > 1) {
        return prevPage - 1;
      }
      if (action === 'next' && prevPage < totalPages) {
        const nextPage = prevPage + 1;
        if (videosSectionRef.current) {
          videosSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return nextPage;
      }
      if (typeof action === 'number') return action;
      return prevPage;
    });
  }, [totalPages]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className='mx-auto'>
      <h1 ref={videosSectionRef} className='text-center font-bold text-purple-700 mb-20 text-2xl'>
        YouTube Channel
      </h1>

      <YoutubeHead
        subscribers={channelData?.subscriberCount || 0}
        videoCount={channelData?.videoCount || 0}
        viewCount={channelData?.viewCount || 0}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className='grid gap-x-5' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {currentVideos.map((video, idx) => (
            <YoutubeCard
              key={idx}
              title={video.snippet.title}
              publishedAt={video.snippet.publishedAt}
              link={video.Videolink}
            />
          ))}
        </div>
      )}

      <div className='pagination flex items-center justify-center space-x-10 mt-10'>
        <button onClick={() => paginate('prev')} disabled={currentPage === 1}>
          <FaArrowAltCircleLeft className={`text-4xl ${currentPage === 1 ? "text-purple-500" : "text-purple-700"}`} />
        </button>

        <button
          onClick={() => paginate('next')}
          disabled={currentPage === totalPages}
        >
          <FaArrowAltCircleRight className={`text-4xl ${currentPage === totalPages ? "text-purple-500" : "text-purple-700"}`} />
        </button>
      </div>
    </div>
  );
};

export default Youtube;
