function slowDown(veocity, printer) {
  let deceleration = 20

  while(velocity > 0) {
    printer(velocity)
    velocity -= deceleration
  }
  alert("停止中")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log(velocity)
  }
)