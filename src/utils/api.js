import conf from "../conf/conf";

const fetchFromYoutube = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': conf.API,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const url = new URL('https://youtube-v31.p.rapidapi.com/search');
  url.search = new URLSearchParams({
    channelId: conf.ID,
    part: 'snippet,id',
    order: 'date',
    maxResults: '20'
  }).toString();

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error fetching data from YouTube API: ${response.statusText}`);
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error;
  }
};

const fetchChannelYoutube = async () => {
  const options1 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': conf.API,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const url = new URL('https://youtube-v31.p.rapidapi.com/channels');
  url.search = new URLSearchParams({
    part: 'snippet,statistics',
    id: conf.ID
  }).toString();

  try {
    const response = await fetch(url, options1);
    if (!response.ok) {
      throw new Error(`Error fetching data from YouTube API: ${response.statusText}`);
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error;
  }
};

export { fetchFromYoutube, fetchChannelYoutube };
