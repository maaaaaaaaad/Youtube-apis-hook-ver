import React, { useEffect, useState } from "react";
import "./components/css/App.module.css";
import List from "./components/List";
import Search from "./components/Search";
import Player from "./components/Player";

const App = ({ search, userVideo }) => {
  const [videos, setup] = useState([]); //videos = [];
  const [selectedVideo, videoUpdate] = useState(null);

  useEffect(() => {
    search //
      .mostPopular()
      .then((data) => setup(data));
  }, [search]);

  const content = (text) => {
    userVideo //
      .userSearch(text)
      .then((result) => setup(result));
    videoUpdate(null);
  };

  const back = () => {
    videoUpdate(null);
  };

  return (
    <>
      <Search userText={content} back={back}></Search>
      {selectedVideo && <Player video={selectedVideo}></Player>}
      <List videos={videos} videoUpdate={videoUpdate}></List>
    </>
  );
};

export default App;
