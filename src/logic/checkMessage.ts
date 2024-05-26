import { equals } from 'logic/filterOperations/equals';
import { startsWith } from 'logic/filterOperations/startsWith';
import { endsWith } from 'logic/filterOperations/endsWith';
import { contains } from 'logic/filterOperations/contains';
import { FilterOperationsParams } from 'data/filterOperations';
import { AllOperations } from 'data/filter';
import { greater } from 'logic/filterOperations/greater';
import { less } from 'logic/filterOperations/less';
import { greaterOrEqual } from 'logic/filterOperations/greaterOrEqual';
import { lessOrEqual } from 'logic/filterOperations/lessOrEqual';
import { after } from 'logic/filterOperations/after';
import { before } from 'logic/filterOperations/before';

export const checkMessage = ((params: FilterOperationsParams, operation: AllOperations) => {
  let isCorrectMessage = false
  switch (operation) {
    case 'eq': {
      isCorrectMessage = equals(params)
      break
    }
    case 'startsWith': {
      isCorrectMessage = startsWith(params)
      break
    }
    case 'endsWith': {
      isCorrectMessage = endsWith(params)
      break
    }
    case 'contains': {
      isCorrectMessage = contains(params)
      break
    }
    case 'gt': { // Greater
      isCorrectMessage = greater(params)
      break
    }
    case 'lt': { // Less
      isCorrectMessage = less(params)
      break
    }
    case 'gte': { // greaterOrEqual
      isCorrectMessage = greaterOrEqual(params)
      break
    }
    case 'lte': { // lessOrEqual
      isCorrectMessage = lessOrEqual(params)
      break
    }
    case 'after': { // lessOrEqual
      isCorrectMessage = after(params)
      break
    }
    case 'before': { // lessOrEqual
      isCorrectMessage = before(params)
      break
    }
  }
  return isCorrectMessage
})