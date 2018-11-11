function produceDrivingRange(blockRange){
  return function(startDrive, endDrive){
    let distance = Math.abs((parseInt(endDrive)) - (parseInt(startDrive)));
    let range = blockRange - distance;

    if( range > 0){
      return `within range by ${range}`
    }
    else {
      return `${Math.abs(range)} blocks out of range`
    }
  }
}


function produceTipCalculator(percent) {
  return function(cost){
    return cost*percent;

  }
}

 function createDriver() {
   let DriverId = 0;

   return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
     }
   }
}
