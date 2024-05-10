const User = require("./User")

class Scooter {
  // scooter code here
  static nextSerial = 1
  constructor(station){
    this.station = station
    this.user = null
    this.serial += Scooter.nextSerial
    this.charge = 100
    this.isBroken = false
  }
  rent(user){
    if(user instanceof User && this.charge>20 && this.isBroken===false){
      this.user = user
    }
    else {
      throw Error ('scooter needs to charge or scooter needs repair')
    }
  }
  dock(station){
    this.station = station;
    this.user = null
  }

  recharge() {
    const timer = setInterval(() => {
        if (this.charge < 100) {
            this.charge += 10;
            console.log(`Charge increased to ${this.charge}%`);
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

requestRepair() {
  setTimeout(() => {
      this.isBroken = false;
      console.log("Repair completed.");
  }, 5000);
}
}

}

module.exports = Scooter
