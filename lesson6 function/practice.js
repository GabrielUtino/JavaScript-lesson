let spaceshipName = prompt("戦艦名")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
  let option
  while(option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt("番号の入力\n 1: 加速 +5 \n 2: 減速 -5 \n 3: ステータス \n 4: 終了")
  }
  return option
}

function speedUp(velocity) {
  let newVelocity = velocity + 5
  return newVelocity
}

function speedDown(velocity) {
  let newVelocity = velocity - 5
  if(newVelocity < 0) {
    newVelocity = 0
  }
  return newVelocity
}

function printSpaceshipBoardData(spaceshipName,velocity) {
  alert("戦艦名: " + spaceshipName + "\n現在の速度: " + velocity)
}

do{
  chosenOption = showMenu
  switch(chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity)
      break
    case "2":
      speedshipVelocity = speedDown(spaceshipVelocity)
      break
    case "3":
      printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
      break
    default:
      alert("入力に誤りあり。")
  }
} while(chosenoption != "4")