import { checkIfAllEvent } from '../untils/common'

describe('checkIfAllEvent()', () => {
  test('should return false when array is empty', () => {
    expect(checkIfAllEvent([])).toBe(false)
  })
  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvent([1, 2, 4, 7])).toBe(false)
  })
  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvent([2, 4])).toBe(true)
  })
})
