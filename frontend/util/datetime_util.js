export const formatDate = date => {
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const convertedDate = new Date(date);
  const month = MONTHS[convertedDate.getMonth()];
  return (
    `${month} ${convertedDate.getDate()}, ${convertedDate.getFullYear()}`
  );
};