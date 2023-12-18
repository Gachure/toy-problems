function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerOverSpeed = 5;
    const demeritPointsThreshold = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerOverSpeed);
  
    if (demeritPoints > demeritPointsThreshold) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
  const carSpeed=80;
  calculateDemeritPoints{carSpeed}  