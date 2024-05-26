import { FilterOperationsParams } from 'data/filterOperations';

export const startsWith = ({ filterValue, messageValue }: FilterOperationsParams) => {
  const messageString = messageValue.toString()

  return messageString.indexOf(filterValue.toString()) === 0
}