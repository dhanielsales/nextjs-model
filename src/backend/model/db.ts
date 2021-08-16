import Knex from 'knex';

export type Db = Knex<any, unknown[]>;

export interface Raw<T> {
  command: string;
  rowCount: number;
  rows: T[];
  fields: Field[];
}
interface Field {
  name: string;
  tableID: number;
  columnID: number;
  dataTypeID: number;
  dataTypeSize: number;
  dataTypeModifier: number;
  format: string;
}
