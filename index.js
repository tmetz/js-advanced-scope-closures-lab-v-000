function produceDrivingRange(range) {
  return function(beginSt, endSt) {
    let driveLength = parseInt(beginSt.slice(-2), 10) - parseInt(endSt.slice(-2), 10)
    if (range - driveLength >= 0) {
      return "within range by " + range - driveLength;
    }
    else {
      return driveLength - range + " blocks out of range";
    }
  };
}