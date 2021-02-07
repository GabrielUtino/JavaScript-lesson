const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(function(spaceship) {
  return spaceship[2] = false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

let message = "乗車人数９人以上の戦艦: " + crewGreaterThan9.join(", ")
message += "\n発進準備中の船: " + (ongoingHitchPlatform + 1)
message += "\n戦艦: " + highlightedSpaceships.join(", ")

alert(message)
