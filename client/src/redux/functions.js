export const orderAsc = function(a, b) {
    if (a.population > b.population) {
      return 1;
    }
    if (b.population > a.population) {
      return -1;
    }
    return 0;
  };
  
  export const orderDesc = function(a, b) {
    if (a.population > b.population) {
      return -1;
    }
    if (b.population > a.population) {
      return 1;
    }
    return 0;
  };
