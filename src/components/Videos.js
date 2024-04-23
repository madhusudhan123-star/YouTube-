import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';

const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.length   > 0 ? (
        videos.map((item, index) => (
          <Box key={index}>
            {<VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        ))
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default Videos;

// import {Stack , Box} from '@mui/material'; 
// import VideoCard from './VideoCard'; 
// import ChannelCard from './ChannelCard'; 

// const Videos = (videos) => { 
//   return ( 
//     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}> 
//       {videos.length <= 0 ?  <h1>Loading...</h1>  :  videos.foreach((item, index) => { 
//         <Box key={index}> {item.id.videoId && <VideoCard video={item} />} 
//         {item.id.channelId && <ChannelCard channelDetails={item} />} </Box> })
//         } 
//     </Stack> 
//   ) 
// } 

// export default Videos