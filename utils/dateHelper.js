import moment from "moment";

export const getCurrentDate = () => {
  let now = moment();

  return {
    now,
    prettier: prettier(now),
  };
};

export const toMoment = (_date) => {
  let curr = moment(_date);

  return prettier(curr);
};

export const prettier = (_date) => {
  return {
    date: _date.format("MM-DD-YYYY"),
    time: _date.format("HH:mm"),
    // dateTimeNow: _date.format("MM-DD-YYYY HH:mm"),
    dateTimeNow: _date.format("YYYY-MM-DD HH:mm"),
    day: _date.format("ddd"),
    mon_date: _date.format("MMM DD"),
  };
};
