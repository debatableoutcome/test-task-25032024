export const formatDate = (date) => {
  if (!date) return "";

  const isDateObject = date instanceof Date;

  const validDate = isDateObject ? date : new Date(date);
  if (isNaN(validDate.getTime())) {
    return "Invalid date";
  }

  const day = validDate.getDate().toString().padStart(2, "0");
  const month = validDate.toLocaleString("default", { month: "long" });
  const year = validDate.getFullYear();
  return `${day} ${month} ${year}`;
};
