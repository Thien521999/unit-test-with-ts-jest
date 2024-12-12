interface state {
  name: 'Thien'
}
interface state {
  age: 'Thien'
}

type Site1 = {
  name: string
}
type Site2 = {
  age: string
}

type Site3 = Site1 & Site2

const handleClick = <Type>(value: Type) => value

// ts và js
// typescript
// + có quy dinh kiểu đầu vào cho constructor,
// + quy đinh kiểu dữ liệu cho thuộc tính
// + public, private

// js
// ko

class Person {
  private name: string
  age: number
  readonly money: number = 40

  constructor(name: string, age: number, money: number) {
    this.name = name
    this.age = age
    this.money = money
  }

  handleGetName() {
    this.name
    // const data = this.money
  }
}

const martin = new Person('Thien', 25, 40)
martin.age

// cú pháp shorthand
class Car {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
// tương đương
// class Car {
//   name: string
//   age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// Ràng buộc trong generic thì  dùng extends

interface lengthObject {
  length: number
}

const logIdentity = <T extends lengthObject>(value: T) => {
  console.log(value.length)
  return value
}

logIdentity({
  length: 2,
})

// truyền nhiều generic
const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
  console.log(obj)
  console.log(key)
  return obj[key] // case nay dung `extends keyof Obj`
}

getValue({ name: 'Martin', age: 25 }, 'age')

// Default generic
interface Box<T = string> {
  value: T
}

const box: Box = {
  value: 'John',
}
