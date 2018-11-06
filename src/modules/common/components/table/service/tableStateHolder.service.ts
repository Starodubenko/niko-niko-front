import {Injectable} from '@angular/core';
import {ITableRow} from '../model';
import {ITableDimensions} from '../model/tableDimensions.model';

@Injectable()
export class TableStateHolderService {
  matrix;
  dimensions;
  valueMapper = data => data;

  setMatrix(matrix: ITableRow[]) {
    this.matrix = matrix;
  }

  setDimensions(dimensions: ITableDimensions) {
    this.dimensions = dimensions;
  }

  getMatrix(): ITableRow[] {
    return this.matrix;
  }

  getDimensions(): ITableDimensions {
    return this.dimensions;
  }

  getXoffset(index: number) {
    return this.dimensions.cellWidth * index;
  }

  getYoffset(index: number) {
    return this.dimensions.cellHeight * index;
  }

  setValueMapper(func: (data) => string){
    this.valueMapper = func;
  }

  getValueMapper(): (data) => string {
    return this.valueMapper;
  }
}
