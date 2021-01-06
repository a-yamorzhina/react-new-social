export const required = value => {
  if (value) return undefined;
  return "Field is required"
};

let maxLength;

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length should be ${maxLength} symbols`;
  return undefined;
};


