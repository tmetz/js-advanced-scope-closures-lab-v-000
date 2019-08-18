function produceDrivingRange(range) {
  return function(beginSt, endSt) {
    let driveLength = parseInt(endSt.slice(0, -2)) - parseInt(beginSt.slice(0, -2));
    console.log(driveLength);
    if (range - driveLength >= 0) {
      return "within range by " + range - driveLength;
    }
    else {
      return driveLength - range + " blocks out of range";
    }
  };
}
