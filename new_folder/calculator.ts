enum Operator {
  Add = 'add',
  Substract = 'substract',
  Multiply = 'multiply',
  Divide = 'divide',
}

type Operation = (x: number, y: number) => number

const operations: [Operator, Operation][] = []

const adds = function (first: number, second: number) {
  return first + second
}

operations.push([Operator.Add, adds])

const substract = function (first: number, second: number) {
  return first - second
}

operations.push([Operator.Substract, substract])

const multiply = function (first: number, second: number) {
  return first * second
}

operations.push([Operator.Multiply, multiply])

const divide = function (first: number, second: number) {
  return first / second
}

operations.push([Operator.Divide, divide])
console.log(operations)
const calculators = function (first: number, second: number, op: Operator) {
  const tuple = operations.find(tpl => tpl[0] === op)!
  const operation = tuple[1]
  const result = operation(first, second)
  return result
}

console.log(calculators(4, 6, Operator.Add))
console.log(calculators(4, 6, Operator.Divide))
console.log(calculators(4, 6, Operator.Multiply))
console.log(calculators(4, 6, Operator.Substract))
