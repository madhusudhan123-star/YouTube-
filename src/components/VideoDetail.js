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
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <MemoizedVideos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

const MemoizedVideos = React.memo(Videos);

export default VideoDetail;