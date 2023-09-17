import moment from "moment";

const formatDate = (_date) => {
  if (!_date) return null;

  const current = moment(_date);

  return {
    month_date: current.format("MMMM Do"),
  };
};

export { formatDate };
