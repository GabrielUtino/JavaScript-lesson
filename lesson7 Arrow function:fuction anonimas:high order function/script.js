let velocity = 150


while(velocity > 0) {
    console.log(velocity)
    velocity -= 20
    if(velocity < 0) {
      velocity = 0
      console.log(velocity)
    }
}

alert("速度: " + velocity)