import { FilterOperationsParams } from 'data/filterOperations';

export const endsWith = ({ filterValue, messageValue }: FilterOperationsParams) => {
  const messageString = messageValue.toString()
  const filterString = filterValue.toString()

  const correctIndex = messageString.length - filterString.length

  return messageString.indexOf(filterValue.toString()) === correctIndex
}