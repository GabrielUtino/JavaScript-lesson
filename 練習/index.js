class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.velocity = 0
  }
  start() {
    this.enrollSpaceship()
  }
  enrollSpaceship() {
    let spaceshipName = prompt("船の名前を入力してください")
    let crewQuantity = prompt("乗船人数を入力してください")
    let weponsQuantity = prompt("武器数を入力してください")
    let newSpaceship = new BattleShips(spaceshipName, crewQuantity, weponsQuantity)
    spaceships += newSpaceship
    return spaceships
  }
  speedChange() {
    while(choiceOption != "3") {
      let choiceOption = prompt("選択してください\n1: 加速\n2: 減速\n3: 終了")
      if(choiceOption == "1"){
        let acceleration = prompt("速度を入力してください")
        this.speedUp(acceleration)
      }else if(choiceOption == "2"){
        let deceleration = prompt("速度を入力してください")
        this.speedDown(deceleration)
      }
    }
  }
  speedUp(acceleration) {
    this.velocity = this.velocity + acceleration
    return this.velocity
  }
  speedDown(decelerate) {
    this.velocity = this.velocity - decelerate
    return this.velocity
  }
  printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList +=    (index + 1) + "- " + spaceship.name + 
                            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
  }
  printOut() {
    let status = "舟名: " + spaceship.name + "\nタイプ: " + spaceship.type + "\nキャプテン: " + spaceship.captain + "速度: " + spaceship.velocity
    return status
  }
}
class BattleShips extends Spaceship {
  constructor(name, crewQuantity, weponsQuantity) {
    super(name, crewQuantity)
    this.type = weponsQuantity
    this.velocity = 0
  }
}
let spaceships = {}
let spaceship = new Spaceship()
spaceship.start()