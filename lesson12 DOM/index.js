function saveHouse() {
  let area = document.querySelector("input[name='name']").value
  let number = document.querySelector("input[name='number']").value
  let street = document.querySelector("input[name='street']").value
  let city = document.querySelector("input[name='city']").value

  let newListValue = document.createElement("li")
  newListValue.innerText = area + "㎡, number " + number + "(" + street + "-" + city + ")"

  let removeButton = document.createElement("button")
  removeButton.type = "button"
  removeBotton.innerText = "Remover"
  removeBotton.setAttributen("onclick", "removeHouse(this)")

  newListValue.appendChild(removeButton)

  document.getEelementById("house-list").appendChild(newListValue)
}

function removeBotton() {

}