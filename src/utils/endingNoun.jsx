export const nounWithNumerals = (number) => {
  if (number > 20) {
    if ([2, 3, 4].includes(String(number)[number - 1])) {
      return 'отеля';
    } else {
      return 'отелей';
    }
  } else {
    if ([2, 3, 4].includes(number)) {
      return 'отеля';
    } else {
      return 'отелей';
    }
  }
};
