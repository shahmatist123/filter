export type DateType = Date | string;

export type Values = DateType | string | number | boolean;

export type Message = Record<string, Values>;

export type StringFilter = {
  id?: string,
  type: 'string';
  field: string;
  operation: 'eq' | 'startsWith' | 'endsWith' | 'contains';
  value: string;
};

export type NumberFilter = {
  id?: string,
  type: 'number';
  field: string;
  operation: 'eq' | 'gt' | 'lt' | 'gte' | 'lte';
  value: number;
};

export type BooleanFilter = {
  id?: string,
  type: 'boolean';
  field: string;
  operation: 'eq';
  value: boolean;
};

export type DateFilter = {
  id?: string,
  type: 'date';
  field: string;
  operation: 'eq' | 'after' | 'before';
  value: DateType;
};

export type OrFilter = {
  id?: string,
  type: 'or'
  filters: Filter[];
};

export type AndFilter = {
  id?: string,
  type: 'and'
  filters: Filter[];
};

export type Filter = StringFilter | NumberFilter | BooleanFilter | DateFilter | OrFilter | AndFilter;

type OperationOf<T> = T extends { operation: infer O } ? O : never;

export type AllOperations = OperationOf<Filter>;

export type ValueTypes = string | number | boolean | DateType