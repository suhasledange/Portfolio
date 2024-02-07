import conf from "../conf/conf";


const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${conf.API}&channelId=${conf.ID}&part=snippet,id&maxResults=25`


export const fetchFromYoutube = async ()=>{
        const response = await fetch(fetchurl);
        const resData = await response.json();
        return resData;
}

