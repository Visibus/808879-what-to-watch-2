class AdapterMovie {
  constructor(data) {
    this.movieTitle = data[`name`];
    this.movieImg = data[`poster_image`];
    this.previewImage = data[`preview_image`];
    this.backgroundImage = data[`background_image`];
    this.backgroundColor = data[`background_color`];
    this.description = data[`description`];
    this.rating = data[`rating`];
    this.scoresCount = data[`scores_count`];
    this.director = data[`director`];
    this.starring = data[`starring`];
    this.runtime = data[`run_time`];
    this.genre = data[`genre`];
    this.released = data[`released`];
    this.id = data[`id`];
    this.isFavorite = data[`is_favorite`];
    this.videoLink = data[`video_link`];
    this.previewVideoLink = data[`preview_video_link`];
  }

  static parseMovie(data) {
    return new AdapterMovie(data);
  }

  static parseMovies(data) {
    return AdapterMovie.parseMovie(data);
  }
}

export default AdapterMovie;

