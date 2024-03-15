export const getDateDifferenceFromNow = (fromDate) => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();

  // Convert milliseconds to seconds
  difference = difference / 1000;

  // Calculate day difference
  const dayDifference = Math.floor(difference / (3600 * 24));
  difference -= dayDifference * 3600 * 24;

  // Calculate month difference
  const monthDifference = Math.floor(dayDifference / 30);
  difference -= monthDifference * 30;

  // Calculate hour difference
  const hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;

  // Calculate minute difference
  const minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  // Remaining seconds
  const secondDifference = Math.round(difference);

  // Construct message
  let message = "";

  if (monthDifference > 0) {
    message += `${monthDifference}mon `;
  }

  if (dayDifference > 0) {
    message += `${dayDifference}d `;
  }

  if (hourDifference > 0) {
    message += `${hourDifference}h `;
  }

  if (minuteDifference > 0) {
    message += `${minuteDifference}min `;
  }

  if (secondDifference > 0) {
    message += `${secondDifference}s `;
  }

  return message.trim(); // Trim any extra whitespace
};
