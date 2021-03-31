import React from "react";

const View = ({ title, thumbnails, videoClick, items }) => {
  const click = () => {
    videoClick(items);
  };

  return (
    <>
      <li>
        <div onClick={click}>
          <img src={thumbnails} alt="thumnails" />
          {title}
        </div>
      </li>
    </>
  );
};
export default View;
