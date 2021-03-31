import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import Search from "./components/service/Search";
import UserVideo from "./components/service/UserVideo";

const search = new Search(process.env.REACT_APP_YOUTUBE_API_KEY);
const userVideo = new UserVideo(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App search={search} userVideo={userVideo} />
  </React.StrictMode>,
  document.getElementById("root")
);
