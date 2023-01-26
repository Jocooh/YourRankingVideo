import React from "react";
import YouTube from "react-youtube";
import { FcLike } from "react-icons/fc";

function VideoBox({ iconSize, style, videoId, item }) {
  return (
    <div
      style={{
        boxShadow: "10px 15px 15px #888",
        marginBottom: "30px",
        marginLeft: "20px",
      }}
    >
      <YouTube
        style={style}
        videoId={videoId}
        opts={{
          height: "100%",
          width: "100%",
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
      {/* BottomBar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#eee",
          width: "100%",
          padding: "2%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ boxSizing: "border-box" }}>
          <span>
            {item?.snippet.title.slice(0, 15)}
            {item?.snippet.title.length > 7 && "..."}
          </span>
        </div>
        {/* 하트 + 좋아요수 */}
        <div
          style={{
            display: "flex",
            marginRight: "10px",
          }}
        >
          <FcLike
            onClick={() => {
              alert("");
            }}
            style={{ fontSize: iconSize }}
          />
          <span style={{ fontSize: iconSize, marginLeft: "5px" }}>30</span>
        </div>
      </div>
    </div>
  );
}

export default VideoBox;
