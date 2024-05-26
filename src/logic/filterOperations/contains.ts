import { FilterOperationsParams } from 'data/filterOperations';

export const contains = ({ filterValue, messageValue }: FilterOperationsParams) => {
  const newValue = messageValue.toString()

  return newValue.indexOf(filterValue.toString()) !== -1
}