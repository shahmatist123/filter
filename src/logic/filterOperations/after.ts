import { FilterOperationsParams } from 'data/filterOperations';
import { isString } from 'logic/helpers/isString';

export const after = ({ filterValue, messageValue }: FilterOperationsParams) => {
  if (isString(filterValue) || isString(messageValue)) {
    return Date.parse(filterValue as string) < Date.parse(messageValue as string)
  }
  return false
}