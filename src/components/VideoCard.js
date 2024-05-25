import React from 'react';
import { Link } from "react-router-dom"; 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// ... rest of your code
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/Constants";

const VideoCard = ({video}) => {
  const videoId = video.id.videoId;
  const snippet = video.snippet;
  return(
    <div className='xs:w-full sm:w-80 md:w-80 lg:w-80 xl:w-80 rounded-lg'>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} className='rounded-lg hover:rounded-none xs:w-full sm:w-80 h-44'/>
      </Link>
      <div className='h-28 text-black'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
          <div variant="subtitle1">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </div>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <div variant="subtitle2">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </div>
        </Link>
      </div>
    </div>
  )
};

export default VideoCard ;