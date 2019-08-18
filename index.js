function produceDrivingRange(range) {
  return function(beginSt, endSt) {
    let driveLength = parseInt(endSt.slice(0, -2)) - parseInt(beginSt.slice(0, -2));
    let diff = Math.abs(range - driveLength);
    if (range - driveLength >= 0) {
      return "within range by " + diff;
    }
    else {
      return diff + " blocks out of range";
    }
  };
}
