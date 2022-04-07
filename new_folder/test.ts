const daysInWeak = 7
const person = 'Ada Lovelace'
const isRaining = false
const today = new Date() 
const months = ['Jan', 'Feb', 'Mar']
const notDefined = undefined
const nothing = null
const add = (x: number, y: number) => x + y 
const calculator = {
  add
}

const everything = [daysInWeak, person, isRaining, today, months, notDefined, nothing, add, calculator]

for (const something of everything) {
  const type = typeof something 
  console.log(something, type)
}
