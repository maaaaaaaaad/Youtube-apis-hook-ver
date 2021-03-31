import React from "react";
import View from "./View";

const List = ({ videos, videoUpdate }) => {
  const setVideo = (data) => {
    const videoId = data.id;
    videoUpdate(videoId);
    window.scroll(0, 0);
  };
  return (
    <>
      <ul>
        {videos.map((item) => (
          <View
            key={item.id}
            items={item}
            title={item.snippet.title}
            thumbnails={item.snippet.thumbnails.default.url}
            videoClick={setVideo}
          ></View>
        ))}
      </ul>
    </>
  );
};

export default List;
