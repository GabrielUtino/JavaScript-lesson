//定義ーオブジェ(速度定義、function-加速)
let spaceship = {
  velocitut: 0,
  speed: function(acceleration) {
    this.velocity
  }
}

//船の登録(名前、タイプ、限界速度)
function registerSpaceship() {
  spaceshio.name = prompt("船の名前を入力")
  spaceship.type = prompt("タイプの入力")
  spaceship.maxVelocity = Nuber(prompt("MAX速度を入力"))
}

//ファンクション{船ので＝たを出力、速度の初期化}
function stop() {
  alert( "船名: " + spaceship.name + "\nタイプ: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\nMAX速度" + spaceship.maxVelocity)
  spaceship.velocity = 0
}

//
function showMenu() {
  let chosenOption
  do {
    chosenOption = prompt("選択番号を入力してください: \n1: 加速 \n2: 停止")
    switch(chosenOption) {
      case "1":
        acelerate()
        break
      case "2":
        stop()
        break
      default:
        alert("入力を正しく認識できませんでした。『１』か『２』を入力してください")
    }
  }while(chosenOption != "2")
}

registerSpaceship()
showMenu()