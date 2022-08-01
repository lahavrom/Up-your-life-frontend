export const makeDateTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  return `${day}/${month}/${date.getFullYear()}`;
};

export const makeDateFromDay = (day, month) => {
  const outDay = day < 10 ? `0${day}` : day;
  const outMonth = month < 10 ? `0${month}` : month;
  return `${outDay}/${outMonth}/${new Date().getFullYear()}`;
};

export const generateNowTimeStamp = () => {
  return new Date().valueOf();
};

export const generateEffectiveDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
};

export const getCurrentMonth = () => {
  return new Date().getMonth();
};

export const getMonthFromTimestamp = (timestamp) => {
  return new Date(timestamp).getMonth();
};

export const getDayOfMonth = () => {
  const today = new Date();
  return today.getDate();
};

// sorting dates that are in this format: "31/07/2022"
export const compareDates = (a, b) => {
  const aDate = a.split("/");
  const bDate = b.split("/");
  return (
    parseInt(bDate[0]) + bDate[1] * 31 - (parseInt(aDate[0]) + aDate[1] * 31)
  );
};

// transform date from "01/08/2022" format into "2022-08-01" format
export const toFormDate = (date) => {
  const d = date.split("/");
  return `${d[2]}-${d[1]}-${d[0]}`;
};

// return the day of the date in format "01/08/2022"
export const getDayFromDate = (date) => {
  return parseInt(date.split("/")[0]);
};
