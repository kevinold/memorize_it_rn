var Utils = {
  computeDay: function(count) {
    if (count >= 0 && count <= 25) {
      // Day 1 - 25 times - Range: 1-25
      return 1;
    } else if (count >= 26 && count <= 45) {
      // Day 2 - 20 times - Range: 26-45
      return 2;
    } else if (count >= 46 && count <= 60) {
      // Day 3 - 15 times - Range: 46-60
      return 3;
    } else if (count >= 61 && count <= 70) {
      // Day 4 - 10 times - Range: 61-70
      return 4;
    } else {
      // Day 5 - 5 times - Range: 71-75
      return 5;
    }
  }
};

module.exports = Utils;
