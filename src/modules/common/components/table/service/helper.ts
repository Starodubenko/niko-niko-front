import {ITableColumn, ITableRow} from '../model';

const calculateColumnsMappings = (columns: ITableColumn[], totalWidth: number, cellWidth: number) => {
    const columnsToScaleXMap = {};
    const scaleXToDataMap = {};

    for (let i = 0; i < totalWidth; i++) {
        const currentIndex = Math.round(i / cellWidth);
        const data = columns[currentIndex];
        if (data) {
            columnsToScaleXMap[i] = columns[currentIndex] && columns[currentIndex].label;
        }
    }

    for (let i = 0; i < columns.length; i++) {
        scaleXToDataMap[columns[i].label] = columns[i];
    }

    return {columnsToScaleXMap, scaleXToDataMap};
};

const calculateRowsMappings = (rows: ITableRow[], totalHeight: number, cellHeight: number) => {
    const rowsToScaleYMap = {};
    const scaleYToDataMap = {};

    for (let i = 0; i < totalHeight; i++) {
        const currentIndex = Math.round(i / cellHeight);
        const data = rows[currentIndex];
        if (data) {
            rowsToScaleYMap[i] = rows[currentIndex] && rows[currentIndex].label;
        }
    }

    for (let i = 0; i < rows.length; i++) {
        scaleYToDataMap[rows[i].label] = rows[i];
    }

    return {rowsToScaleYMap, scaleYToDataMap};
};

export const calculateVisibleColumns = (scrollLeft, columns, viewWidth, totalWidth, cellWidth) => {
    if (columns.length < 2) {
        return columns;
    }

    const {columnsToScaleXMap, scaleXToDataMap} = calculateColumnsMappings(columns, totalWidth, cellWidth);
    const currentScaleXValue = columnsToScaleXMap[scrollLeft];
    const currentStartIndex = scaleXToDataMap[currentScaleXValue].index;
    const factualStartIndex = currentStartIndex !== 0 ? currentStartIndex - 1 : currentStartIndex; // to take one more underLeft border
    const visibleColCount = viewWidth / cellWidth;
    const endIndex = currentStartIndex + visibleColCount;
    const factualEndIndex = endIndex !== columns.length ? endIndex + 1 : endIndex;

    return columns.slice(factualStartIndex, factualEndIndex);
};

export const calculateVisibleRows = (scrollTop, rows, viewHeight, totalHeight, cellHeight) => {
    if (rows.length < 2) {
        return rows;
    }

    const {rowsToScaleYMap, scaleYToDataMap} = calculateRowsMappings(rows, totalHeight, cellHeight);
    const currentScaleYValue = rowsToScaleYMap[scrollTop];
    const currentStartIndex = scaleYToDataMap[currentScaleYValue].index;
    const factualStartIndex = currentStartIndex !== 0 ? currentStartIndex - 1 : currentStartIndex; // to take one more underTop border
    const visibleColCount = viewHeight / cellHeight;
    const endIndex = currentStartIndex + visibleColCount;
    const factualEndIndex = endIndex !== rows.length ? endIndex + 1 : endIndex;

    return rows.slice(factualStartIndex, factualEndIndex);
};
