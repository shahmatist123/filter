import { FilterOperationsParams } from 'data/filterOperations';

export const greater = ({ filterValue, messageValue }: FilterOperationsParams) => {
  return messageValue > filterValue
}