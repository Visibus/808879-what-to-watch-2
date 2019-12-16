export const AXIOS_SETTINGS = {
  TIMER: 5000,
  ERROR_AUTHORIZATION: 401,
  BASE_URL: `https://htmlacademy-react-2.appspot.com/wtw`,
  BASE_URL_AVATAR: `https://htmlacademy-react-2.appspot.com`,
};

export const PLAYER_PERCENT = {
  MIN: 0,
  MAX: 100,
};

export const PLAYER_PREVIEW = {
  WIDTH: 280,
  HEIGHT: 175,
  DELAY: 1000,
};

const RATING = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

const TEXT_RATING = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const MOVIE_ALL_GENTRES = `All genres`;

export const COUNT_LIKE_THIS_FILMS = 4;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

const formatRuntime = (runTime) => {
  const h = Math.floor(runTime / MINUTES_IN_HOUR);
  const m = runTime - h * MINUTES_IN_HOUR;

  return `${h}h ${m}m`;
};

const getMovieRating = (rating) => {
  if (rating < RATING.BAD) {
    return TEXT_RATING.BAD;
  }
  if (rating < RATING.NORMAL) {
    return TEXT_RATING.NORMAL;
  }
  if (rating < RATING.GOOD) {
    return TEXT_RATING.GOOD;
  }
  if (rating < RATING.VERY_GOOD) {
    return TEXT_RATING.VERY_GOOD;
  }
  return TEXT_RATING.AWESOME;
};

const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat(`en`, {
    month: `long`,
    day: `numeric`,
    year: `numeric`,
  });
  return formatter.format(new Date(date));
};

const convertToISODate = (date) => {

  return new Date(date).toISOString();
};

const formatRating = (rating) => {
  const formatter = new Intl.NumberFormat(navigator.language, {minimumFractionDigits: 1});
  return formatter.format(rating);
};

const convertTimeToString = (seconds) => {
  seconds = Math.round(seconds);
  let hours = 0;
  let minutes = 0;

  hours = Math.floor(seconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR));
  seconds = seconds % (SECONDS_IN_MINUTE * MINUTES_IN_HOUR);
  minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  seconds = seconds % SECONDS_IN_MINUTE;

  const time = `${String(hours).padStart(2, `0`)}:${String(minutes).padStart(2, `0`)}:${String(seconds).padStart(2, `0`)}`;
  return time;
};

const getId = (film) => {
  if (film.id) {
    return film.id;
  }
  return 0;
};

const changeFilm = (films, newFilm) => {
  return films.map((item) => {
    return item.id === newFilm.id ? newFilm : item;
  });
};

export {formatRuntime, getMovieRating, formatDate, convertToISODate, formatRating, convertTimeToString, getId, changeFilm};
