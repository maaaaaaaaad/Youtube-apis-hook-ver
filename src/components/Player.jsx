import React from "react";

const Player = ({ video }) => {
  return (
    <>
      <iframe
        title="title"
        type="text/html"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${video}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </>
  );
};
export default Player;
