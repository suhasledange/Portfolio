import conf from "../conf/conf";

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${conf.API}&channelId=${conf.ID}&part=snippet,id&maxResults=25`;

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
