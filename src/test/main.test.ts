import { classifyStudent, isPositive } from '../untils/common'

// isPositive
describe('isPositive()', () => {
  it('should return true when n > 0', () => {
    expect(isPositive(1)).toBe(true)
    expect(isPositive(2)).toBe(true)
    expect(isPositive(3)).toBe(true)
  })
  it('should return false when n = 0', () => {
    expect(isPositive(0)).toBe(false)
  })
  it('should return false when n < 0', () => {
    expect(isPositive(-1)).toBe(false)
  })
})

describe('classifyStudent()', () => {
  test('Should return Invalid Mark! when n < 0', () => {
    expect(classifyStudent(-1)).toBe('Invalid mark')
  })
  test('Should return Invalid Mark! when n > 10', () => {
    expect(classifyStudent(11)).toBe('Invalid mark')
  })

  test('Should return Excellence! when n > 8', () => {
    expect(classifyStudent(9)).toBe('Excellence')
    expect(classifyStudent(10)).toBe('Excellence')
  })

  test('Should return Good! when n in [7-8]', () => {
    expect(classifyStudent(7)).toBe('Good')
    expect(classifyStudent(8)).toBe('Good')
  })

  test('Should return Not Good! when n in [4-6]', () => {
    ;[4, 5, 6].forEach((n) => {
      expect(classifyStudent(n)).toBe('Not Good')
    })
  })
  test('Should return Bad! when n in [1-3]', () => {
    ;[1, 2, 3].forEach((n) => {
      expect(classifyStudent(n)).toBe('Bad')
    })
  })
})
