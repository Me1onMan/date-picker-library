const formatDate = (incomeDate: Date, pattern = "dd.MM.yyyy"): string => {
  if (!incomeDate) return "";
  const year = incomeDate.getFullYear().toString();
  const month = String(incomeDate.getMonth() + 1).padStart(2, "0");
  const day = String(incomeDate.getDate()).padStart(2, "0");
  const result = pattern.replace("dd", day).replace("MM", month).replace("yyyy", year);
  return result;
};

export default formatDate;
