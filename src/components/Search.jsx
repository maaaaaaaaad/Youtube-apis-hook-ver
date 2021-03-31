import React from "react";

const Search = ({ userText, back }) => {
  const inputRef = React.useRef();

  const done = (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value;
    userMessage && userText(userMessage);
  };

  return (
    <>
      <form onSubmit={done}>
        <input ref={inputRef} type="text" placeholder="...Search" />
        <input type="submit" value="Q" />

        <button type="button" onClick={back}>
          Close Video
        </button>
      </form>
    </>
  );
};

export default Search;
