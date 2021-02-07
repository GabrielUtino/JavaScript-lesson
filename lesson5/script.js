let nameShip = "abcdefg"
let choiceWord = prompt("船の名前：" + nameShip + "\nこれから船の名前を後ろから１文字ずつ取り出します。取り出したくない文字を入力してください")
let newNameShip = ""

for (let i = nameShip.length -1; i >= 0; i--) {
  if (nameShip[i] == choiceWord) {
    break
  } else {
    newNameShip += nameShip[i]
  }
}
alert("変更前:" + nameShip + "\n変更後:" + newNameShip )