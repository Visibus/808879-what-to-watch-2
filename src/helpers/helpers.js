export const TIMER_AXIOS = 5000;
export const ERROR_AUTHORIZATION = 401;

export const MIN_PROCENT = 0;
export const MAX_PROCENT = 100;

const RATING_BAD = 3;
const RATING_NORMAL = 5;
const RATING_GOOD = 8;
const RATING_VERY_GOOD = 10;

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

const formatRuntime = (runTime) => {
  const h = Math.floor(runTime / MINUTES_IN_HOUR);
  const m = runTime - h * MINUTES_IN_HOUR;

  return `${h}h ${m}m`;
};

const movieRating = (rating) => {
  if (rating < RATING_BAD) {
    return `Bad`;
  }
  if (rating < RATING_NORMAL) {
    return `Normal`;
  }
  if (rating < RATING_GOOD) {
    return `Good`;
  }
  if (rating < RATING_VERY_GOOD) {
    return `Very good`;
  }
  return `Awesome`;
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

const timeToString = (seconds) => {
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


export {formatRuntime, movieRating, formatDate, convertToISODate, formatRating, timeToString};
