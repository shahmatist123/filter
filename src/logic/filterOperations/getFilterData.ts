import { Filter } from 'data/filter';

export const getFilterData = (filter: Filter) => {
  return filter.type !== "and" && filter.type !== "or" && {operation: filter.operation, field: filter.field, value: filter.value} || {};
}