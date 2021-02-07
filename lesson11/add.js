class App {
  constructor() {
    this.spaceship = null
  }

  start() {
    this.enrollSpaceship()
    let chosenOption
    do {
      chosenOption = this.showInitialMenu()
      this.redirectFeature(chosenOption)
    } while(chosenOption != "3") 
    this.printAndExit()
  }

  enrollSpaceship() {
    let spaceshipName = prompt("船の名前を入力してください")
    let crewQuantity = prompt("乗船人数を入力してください")
    let spaceshipKind = this.askForSpaceshipKind()
    if(spaceshipKind == "1") {
      let weaponsQuantity = prompt("武器の数を入力してください")
      this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
    } else {
      let sitsQuantity = prompt("移動可能なポート数を入力してください")
      this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
    }
  }

  askForSpaceshipKind() {
    let chosenOption
    while(!["1", "2"].includes(chosenOption)) {
      chosenOption = prompt("船のタイプを選択してください\n1: 戦闘タイプ\n2: 運搬タイプ")
    }
    return chosenOption
  }

  showInitialMenu() {
    const promptMessage =   "ご用件の番号を入力してください?\n" +
                            "1- 加速\n" +
                            "2- 船の変更\n" +
                            "3- 結果表示、終了"
    let chosenOption = prompt(promptMessage)
    while(!["1", "2","3"].includes(chosenOption)) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }

  redirectFeature(chosenOption) {
    switch(chosenOption) {
      case "1":
        this.accelerateSpaceship()
        break
      case "2":
        this.enrollSpaceship()
        break
    }
  }

  accelerateSpaceship() {
    let acceleration = Number(prompt("加速したい数値を入力してください"))
    this.spaceship.speedUp(acceleration)
  }

  printAndExit() {
    let finalMessage = "名前: " + this.spaceship.name +"\n乗船人数:" + this.spaceship.crewQuantity + "\n速度: " + this.spaceship.currentVelocity
    alert(finalMessage)
  }
}