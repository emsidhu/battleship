import { expect } from "@jest/globals"
import Ship from "../src/Ship.js"

test("Ship's hit function marks position as hit", () => {
  let ship = Ship([[0,0], [0,1]])

  ship.hit([0, 0])

  expect(ship.hitPositions).toEqual([[0,0]])
})

test("Ship's hit function marks multiple positions as hit", () => {
  let ship = Ship([[0,0], [0,1]])

  ship.hit([0, 0])
  ship.hit([0, 1])

  expect(ship.hitPositions).toEqual([[0,0], [0, 1]])
})

test("Ship is sunk if all of it's positions are hit", () => {
  let ship = Ship([[0, 0]])

  ship.hit([0, 0])

  expect(ship.getSunk()).toBe(true)
})

