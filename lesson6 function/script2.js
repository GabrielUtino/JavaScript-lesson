let spaceshipName = prompt("戦艦名を入力してください")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
  let option
  while(option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt("番号を入力してください\n" + "1- 加速 5km/s\n" + "2- 減速 5km/s\n" + "3- 詳細\n" + "4- 終了")
  }
  return option
}

function speedUp(velocity) {
  newVelocity = velocity + 5
  return newVelocity
}

function speedDown(velocity) {
  newVelocity = velocity - 5
  if(newVelocity < 0){
    alert("船が停止している為、これ以上速度を落とせません")
    newVelocity = 0
  }
  return newVelocity
}

function showshipStatsus(velocity, spaceshipName) {
  alert("戦艦名: " + spaceshipName + "\n現在の速度: " + velocity)
}

do {
  chosenOption = showMenu()
  switch(chosenOption) {
      case "1":
          spaceshipVelocity = speedUp(spaceshipVelocity)
          break
      case "2":
          spaceshipVelocity = speedDown(spaceshipVelocity)
          break
      case "3":
          printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
          break
      default:
          alert("入力に誤りがあります。やり直してください。")
  }
} while(chosenOption != "4")