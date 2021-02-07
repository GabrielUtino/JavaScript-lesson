let counter = 0
let nameship = prompt("船の名前を入力してください")
let answer = prompt("ワープホールに入りますか？\n1- はい\n2- いいえ")
while(answer == 1){
    counter += 1
    alert("ワープホールに突入します")
    answer = prompt("繰り返しワープホールに入りますか？\n1- はい\n2- いいえ")
}
alert(nameship + "は" + counter + "回ワープホールに入りました")