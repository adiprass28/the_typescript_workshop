var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Substract"] = "substract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
})(Operator || (Operator = {}));
const operations = [];
const adds = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, adds]);
const substract = function (first, second) {
    return first - second;
};
operations.push([Operator.Substract, substract]);
const multiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);
const divide = function (first, second) {
    return first / second;
};
operations.push([Operator.Divide, divide]);
console.log(operations);
const calculators = function (first, second, op) {
    const tuple = operations.find(tpl => tpl[0] === op);
    const operation = tuple[1];
    const result = operation(first, second);
    return result;
};
console.log(calculators(4, 6, Operator.Add));
console.log(calculators(4, 6, Operator.Divide));
console.log(calculators(4, 6, Operator.Multiply));
console.log(calculators(4, 6, Operator.Substract));
