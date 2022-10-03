function isArrSame(arr1, arr2) {
  return arr1.every((val, index) => arr2[index] === val)
}

export default function Ship(positions) {
  let length = positions.length
  let hitPositions = []
  let isSunk = false

  function hit(hitPos) {
    hitPositions.push(positions.find(position => {
      return isArrSame(position, hitPos)
    }))
    checkSunk()
  }

  function checkSunk() {
    isSunk = (positions.length === hitPositions.length)
  }

  const getSunk = () => isSunk

  return {length, positions, hitPositions, getSunk, hit}
}