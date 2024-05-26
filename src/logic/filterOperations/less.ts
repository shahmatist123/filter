import { FilterOperationsParams } from 'data/filterOperations';

export const less = ({ filterValue, messageValue }: FilterOperationsParams) => {
  return messageValue < filterValue
}