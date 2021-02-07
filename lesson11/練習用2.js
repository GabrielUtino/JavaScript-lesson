/*要求　名前、乗船人数、タイプ（移動用、戦闘用）
戦闘タイプの場合武器の数、移動用なら移動可能箇所数も入力要求要
どの船も速度は０スタート、
オプションを出す　１：加速　２：船の変更　３：結果＆終了
加速の場合　入力された速度の83％のみを適用させる　velocidade atual+(aceleracao*
結果の表記は
　　名前：
　　乗船人数：
　　速度：*/
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
    let spaceshipName = prompt("Qual o nome da nave?")
    let crewQuantity = prompt("Qual a quantidade de tripulates?")
    let spaceshipKind = this.askForSpaceshipKind()
    if(spaceshipKind == "1") {
      let weaponsQuantity = prompt("Quantas armas a nave possui?")
      this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
    } else {
      let sitsQuantity = prompt("Quantos lugares a nave possui?")
      this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
    }
  }

  askForSpaceshipKind() {
    let chosenOption
    while(!["1", "2"].includes(chosenOption)) {
      chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
    }
    return chosenOption
  }

  showInitialMenu() {
    const promptMessage =   "O que você deseja fazer?\n" +
                            "1- Acelerar a nave\n" +
                            "2- Trocar a nave\n" +
                            "3- Imprimir e sair"
    let chosenOption = prompt(promptMessage)
    while(!["1", "2", "3"].includes(chosenOption)) {
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
    let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
    this.spaceship.speedUp(acceleration)
  }

  printAndExit() {
    let finalMessage =  "Nome: " + this.spaceship.name + "\n" +
                        "Quantidade de tripulates: " + this.spaceship.crewQuantity + "\n" +
                        "Velocidade atual: " + this.spaceship.currentVelocity + "\n"
    alert(finalMessage)
  }
}
