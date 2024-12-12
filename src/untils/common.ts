export function isPositive(n: number) {
  return n > 0
}

export function classifyStudent(mark: number) {
  if (mark < 0 || mark > 10) return 'Invalid mark'

  if (mark > 8) return 'Excellence'
  if (mark >= 7) return 'Good'
  if (mark >= 4) return 'Not Good'

  return 'Bad'
}

export function checkIfAllEvent(numberList: number[]) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false

  let isValid = true

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]
    if (number % 2 !== 0) {
      isValid = false
      break
    }
  }

  return isValid
}
