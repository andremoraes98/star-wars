const comparisonNumber = -1;

export const sortArrayASC = (array, column = 'name') => array.sort((a, b) => {
  if (parseFloat(a[column]) > parseFloat(b[column]) || a[column] === 'unknown') {
    return 1;
  }
  if (parseFloat(a[column]) < parseFloat(b[column]) || b[column] === 'unknown') {
    return comparisonNumber;
  }
  return 0;
});

export const sortArrayDESC = (array, column = 'name') => array.sort((a, b) => {
  if (parseFloat(a[column]) < parseFloat(b[column]) || a[column] === 'unknown') {
    return 1;
  }
  if (parseFloat(a[column]) > parseFloat(b[column]) || b[column] === 'unknown') {
    return comparisonNumber;
  }
  return 0;
});

export const sortNamePlanets = (array) => array.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return comparisonNumber;
  }
  return 0;
});
