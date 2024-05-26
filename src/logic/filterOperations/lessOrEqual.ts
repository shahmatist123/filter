import { FilterOperationsParams } from 'data/filterOperations';

export const lessOrEqual = ({ filterValue, messageValue }: FilterOperationsParams) => {
  return messageValue <= filterValue
}