//practice3

let spaceship = {
  name: "スーパーノヴァ",
  type: "戦闘",
  crew: ["シルヴァ", "ジュリア", "ティアゴ"]
}

//新たなクルーを入力するには
spaceship.crew.push("フェルナンド")

console.log(spaceship)

//-----------------------------------------------------

let spaceships = [
  {name: "エレメンタル", crewQuantity: 10},
  {name: "コロッサス", crewQuantity: 8},
  {name: "ヘルメット", crewQuantity: 15}
]

console.log(spaceships[0].name)  //=>エレメンタル

console.log(spaceships[1].crewQuantity)  //=>8

//各戦艦名とクルー人数を表示
spaceships.forEach(spaceship => {
  alert("戦艦名: " + spaceship.name + "\n人数: " + spaceship.crewQuantity)
})

//-----------------------------------------------------

//オブジェクトの中にオブジェクトも使える
let spaceship2 = {
  name: "ゴリアス",
  maxcrew: 20,
  captein: {
    name: "ヒューゴ",
    age: 34
  }
}

console.log(spaceship2.captein.name)