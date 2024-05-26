import { FilterOperationsParams } from 'data/filterOperations';

export const greaterOrEqual = ({ filterValue, messageValue }: FilterOperationsParams) => {
  return messageValue >= filterValue
}