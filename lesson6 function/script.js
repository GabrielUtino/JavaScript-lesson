let shipname = prompt("戦艦の名前を入力してください")
let shipspeed = 0
let passenger = ""
let choice = ""

do{
  choice = prompt("1: 5km/s加速する \n2: 5km/s減速する \n3: ステータス確認 \n4: 終了する \n番号を入力してください")
  if (choice == 1) {
    shipspeed += 5
  } else if(choice == 2){
    shipspeed -= 5
  } else if(choice == 3){
    alert("戦艦名: " + shipname + "\n現在の速度: " + shipspeed)
  }　else{
    alert("認証できませんでした.\n再度ナンバーを入力してください")
  }
}while(choice != 4)

alert("戦艦名: " + shipname + "\n乗車人数: " + passenger + "\n速度: " + shipspeed)