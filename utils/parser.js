import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (value) => {
    const parsedValue = Number(value);

    return Number.isNaN(parsedValue) ? null : parsedValue;
  });

  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOperations = ["add", "subtract", "multiply", "divide"];

  return _.includes(validOperations, operation);
}
