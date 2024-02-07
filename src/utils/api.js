import conf from "../conf/conf";

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${conf.API}&channelId=${conf.ID}&part=snippet,id&maxResults=25`;

const fetchurl1 = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${conf.ID}&key=${conf.API}`;


export const fetchFromYoutube = async () => {
  try {
    const response = await fetch(fetchurl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error; 
  }
};


export const fetchChannelYoutube = async () => {
    try {
      const response = await fetch(fetchurl1);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const resData = await response.json();
      return resData;
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
      throw error; 
    }
  };

