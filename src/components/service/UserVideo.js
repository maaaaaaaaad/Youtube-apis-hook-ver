class UserVideo {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  userSearch(text) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${text}&type=video&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        return result.items.map((ele) => ({ ...ele, id: ele.id.videoId }));
      });
  }
}

export default UserVideo;
