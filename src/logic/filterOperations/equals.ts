import { FilterOperationsParams } from 'data/filterOperations';

export const equals = ({ filterValue, messageValue }: FilterOperationsParams) => {
  return filterValue === messageValue
};