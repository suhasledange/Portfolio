import axios from "axios";
import conf from "../conf/conf";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    channelId: conf.ID,
    part: 'snippet,id',
    order: 'date',
    maxResults: '20'
  },
  headers: {
    'X-RapidAPI-Key': conf.API,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const options1 = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/channels',
  params: {
    part: 'snippet,statistics',
    id: conf.ID
  },
  headers: {
    'X-RapidAPI-Key': conf.API,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromYoutube = async () => {
  try {
    const response = await axios.request(options);
    const resData = await response.data;    
    return resData;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error; 
  }
};


export const fetchChannelYoutube = async () => {
    try {
      const response = await axios.request(options1);
  
      const resData = await response.data;
      return resData;
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
      throw error; 
    }
  };

