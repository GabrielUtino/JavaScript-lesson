//practice2

let spacialStation = {
  name: "フォックス",
  platformsQuantity: 10,
  "new name": "キャット",//猫やんけ
  true: false,
  2: "発掘"
}

//NGな呼び出し方
//console.log(spacialStation.2)
console.log(spacialStation[2]) //ならOK 
//console.log(spacialStation.new name)
console.log(spacialStation["new name"]) //ならOK 
