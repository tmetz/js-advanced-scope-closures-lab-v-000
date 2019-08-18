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

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
