import React, { useEffect, useState } from 'react'
import conf from '../../conf/conf'
import YoutubeCard from './YoutubeCard'
import { Ylogo } from '../../assets'

const Youtube = () => {

    const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${conf.API}&channelId=${conf.ID}&part=snippet,id&maxResults=25`

    const [allVideo,setAllVideo] = useState([])

    useEffect(()=>{
        fetch(fetchurl)
        .then(res => res.json())
        .then(data =>
            {
                const result = data.items.map(doc=>({
                    ...doc,
                    Videolink:"https://www.youtube.com/embed/"+doc.id.videoId
                }))
                setAllVideo(result);
            })
    },[])

  return (
    <div className='mx-auto'>
          <h1 className='text-center font-bold text-purple-700 mb-20 text-2xl'>Youtube Videos</h1>

        <div className='flex items-center flex-wrap justify-center'>

            {
                allVideo.map(item=>(
                    <YoutubeCard key={Math.random()} title={item.snippet.title} link={item.Videolink}/>
                ))
            }
        </div>

      </div>
  )
}

export default Youtube
