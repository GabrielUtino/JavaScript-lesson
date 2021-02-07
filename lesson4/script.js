let nameShip = "accelerator"
let beforeWord = prompt("船の名前：" + nameShip + "\n変更希望の字を入力してください")
let afterWord = prompt("変更後に希望する字を入力してください")
let newNameShip = ""

for (let i = 0; i < nameShip.length; i++) {
  if (nameShip[i] == beforeWord) {
    newNameShip += afterWord
  } else {
    newNameShip += nameShip[i]
  }
}
alert("結果:" + newNameShip)