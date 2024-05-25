import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import Loader from "./Loader";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const videoData = await fetchFromAPI(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(videoData.items[0]);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    const fetchRelatedVideos = async () => {
      try {
        const relatedVideosData = await fetchFromAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setVideos(relatedVideosData.items);
      } catch (error) {
        console.error("Error fetching related videos:", error);
      }
    };

    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title = "", channelId = "", channelTitle = "" } = {},
    statistics: { viewCount = 0, likeCount = 0 } = {},
  } = videoDetail || {};

  return (
    <div className="min-h-screen">
      <div className="flex sm:flex-col md:flex-row">
        <div className="w-8/12">
          <div className="xs:w-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className=""
              controls
            />
            <div className="text-black font-medium">
              {title}
            </div>
            <div className="flex flex-row justify-between text-black">
              <Link to={`/channel/${channelId}`}>
                <div className="text-black">
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </div>
              </Link>
              <div className="flex flex-row gap-5 align-items-center">
                <div className="opacity-70">
                  {parseInt(viewCount).toLocaleString()} views
                </div>
                <div className="opacity-70">
                  {parseInt(likeCount).toLocaleString()} likes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <MemoizedVideos videos={videos} direction="column" />
        </div>
      </div>
    </div>
  );
};

const MemoizedVideos = React.memo(Videos);

export default VideoDetail;