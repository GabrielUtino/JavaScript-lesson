//クラス { function{名前 人数　エンジンのオンオフ　扉の開閉} hitch {onoff door-onoff} }
class Spaceship {
  constructor(name, crewQuantity) {
      this.name = name
      this.crewQuantity = crewQuantity
      this.isHitched = false
      this.entraceDoorsOpen = false
  }
  hitch() {
      this.isHitched = true
      this.entraceDoorsOpen = true
  }
}

//function { 選択-宣言  while(choosen){prompt}}
function showMenu() {
  let chosenOption
  while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
      chosenOption = prompt(  "ご用件の番号を入力してください\n" +
                              "1- 点火\n" +
                              "2- 表示\n" +
                              "3- 終了")
  }
  return chosenOption
}

//function {宣spaceshipName-prompt  宣crewQuantity-prompt  宣spaceship-nawSpaceship return-spaceship}
function createSpaceship() {
  let spaceshipName = prompt("船名の入力")
  let crewQuantity = prompt("乗船人数")
  let spaceship = new Spaceship(spaceshipName, crewQuantity)
  return spaceship
}

//function {宣apaceship  spaceships.forEach() => spaceshipList += }
function printSpaceshipList(spaceships) {
  let spaceshipList = ""
  spaceships.forEach((spaceship, index) => {
      spaceshipList +=    (index + 1) + "- " + spaceship.name + 
                          " (" + spaceship.crewQuantity + " 人)\n"
  })
  alert(spaceshipList)
}

//宣言 hitchedSpaceships chosenOption
let hitchedSpaceships = []
let chosenOption


//while(chosenOption != "3")
while(chosenOption != "3") {
  chosenOption = showMenu()
  switch(chosenOption) {
      case "1":
          let spaceshipToAdd = createSpaceship()
          spaceshipToAdd.hitch()
          hitchedSpaceships.push(spaceshipToAdd)
          break
      case "2":
          printSpaceshipList(hitchedSpaceships)
          break
  }
}