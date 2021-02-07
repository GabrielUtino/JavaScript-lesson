//メソッド練習
function getAreaFunction() {
  return this.width * this.height//高さ✖︎幅
}

let rectangle = {
  width: 10,
  height: 20,
  getAreaMethod: getAreaFunction,//メソッド  functionにあるthisはこの場合rectangleにある(width: 10,height: 20)の二つを指す
}

console.log(rectangle.getAreaMethod())