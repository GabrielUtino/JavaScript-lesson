let name = prompt("お名前を入力してください")
let speed = prompt("速度を入力してください")
confirm(speed + "k/mで移動します。よろしいですか？")
if (speed <= 0) {
  alert("船が止まっています。速度を上げてください")
} else if(speed < 40) {
  alert("遅すぎます。速度を上げてください")
} else if(speed <= 80) {
  alert("適正速度です")
} else if(speed <= 100) {
  alert("速度が少し早すぎます。")
} else if(speed > 100) {
  alert("適正速度を大きく上回っています。減速してください")
}
alert(name + "様の船は" + speed + "k/mで進んでいます")