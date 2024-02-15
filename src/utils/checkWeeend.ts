const checkWeekend = (date: Date) => {
  const dayOfWeek = date.getDay();
  return !!(dayOfWeek === 0 || dayOfWeek === 6);
};

export default checkWeekend;
