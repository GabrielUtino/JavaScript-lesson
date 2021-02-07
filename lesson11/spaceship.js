class Spaceships {
  static get decelerationRate() {
    return 0.17
  }
  constructor(name, crewQuantity, currentVelocity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.currentVelocity = currentVelocity
  }
  speedUp(acceleration) {
    this.currentVelocity = (acceleration * (1 - Spaceships.decelerationRate))
  }
}

