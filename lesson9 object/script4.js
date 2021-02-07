let velocity = 0

let shipname = prompt("戦艦の名前を入力してください")
let type = ("船のタイプを入力してください")
let limitedsepeed = ("制限速度を入力してください")
let choice = prompt("番号を入力してください\n1: 加速\n2: 停止")

if(choise == 1) {
  let acceleration = prompt("追加したい速度を入力してください")
  velocity += acceleration
  if(velocity > limitedspeed) {
    alert("制限速度を超えた為、船を停止させます")
    velocity = 0
  }
} else if(choise == 2) {
  alert("戦艦名: " + shipname + "\n停止前の速度: " + velocity)
  velocity = 0
}

let shipstatus = {
  
}