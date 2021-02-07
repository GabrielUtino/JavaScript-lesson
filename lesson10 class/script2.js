//クラス { function{名前 人数　エンジンのオンオフ　扉の開閉} hitch {onoff door-onoff} }
class Spaceship {
  constructor(name,quantity) {
    this.name = name
    this.crewQuantity = quantity
    this.isHitched = false
    this.entranceDoorOpen = false
  }
  hitch() {
    this.isHitched = true
    this.entranceDoorOpen = true
  }
}

//function { 選択-宣言  while(choosen){prompt}}
function showMenu() {
  let chosenOption
  
}

//function {宣spaceshipName-prompt  宣crewQuantity-prompt  宣spaceship-nawSpaceship return-spaceship}
function createSpaceship() {

}

//function {宣apaceship  spaceships.forEach() => spaceshipList += }
function printSpaceshipList() {

}

//宣言 hitchedSpaceships chosenOption
let hitchedSpaceships = []
let chosenOption

//while(chosenOption != "3")
while(chosenOption != "3") {
  chosenOption = showMenu()
  switch(chosenOption) {
    case "1":
      break
    case "2":
      break
  }
}