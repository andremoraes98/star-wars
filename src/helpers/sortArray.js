const comparisonNumber = -1;

export const sortArrayASC = (array) => array.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return comparisonNumber;
  }
  return 0;
});

export const sortArrayDESC = (array) => array.sort((a, b) => {
  if (a.name < b.name) {
    return 1;
  }
  if (a.name > b.name) {
    return comparisonNumber;
  }
  return 0;
});
