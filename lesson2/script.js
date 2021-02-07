
let planet = prompt("目的地を選択してください.\n1: アルタイル \n2: フィガロ \n3: ディアボロ")
switch(planet) {
  case "1":
    alert("アルタイルへ向かいます。")
    break
  case "2":
    alert("フィガロへ向かいます。")
    break
  case "3":
    alert("ディアボロへ向かいます。")
    break
  default:
    alert("選択肢にありません。")
}