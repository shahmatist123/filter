import { ValueTypes } from 'data/filter';

export const getFieldType = (value: ValueTypes) => {
  const type = typeof value
  if (type === 'string') {
    return Date.parse(value as string) ? "date" : "string"
  }
  return type
}