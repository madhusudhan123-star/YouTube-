import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';

const Videos = ({videos}) => {
  return (
    <div className='flex'>
      <div className='flex justify-center flex-wrap flex-row gap-5'>
        {videos.length   > 0 ? (
          videos.map((item, index) => (
            <div key={index}>
              {<VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetails={item} />}
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Videos;