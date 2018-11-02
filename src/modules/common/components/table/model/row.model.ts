import {ITableColumn} from './column.model';

export interface ITableRow {
  index: number;
  columns: ITableColumn[];
  label: string;
}
