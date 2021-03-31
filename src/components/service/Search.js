class Search {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        return result.items;
      });
  }
}

export default Search;
