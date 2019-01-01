import {ITeammateDto} from "../dto";
import {INikoNikoData} from "../../components/nikoNiko/interface/nikoNikoData.interface";

export const nikoNikoDataConverter = (data: ITeammateDto[]): INikoNikoData => {
    const rows = calculateNikoNikoMatrix(data);

    let namesRows = [...rows].map((row, index) => {
        return {
            ...row,
            columns: [
                {
                    index: 0,
                    label: row.label,
                    data: {
                        userId: row.columns[index].data.teammate.id,
                        name: row.label
                    },
                }
            ]
        };
    });

    const matrixRows = [...rows];

    const datesRow = {...rows[0]};
    datesRow.columns = datesRow.columns.map(col => {
        return {
            index: col.index,
            label: col.label,
            data: {
                timestamp: col.label
            },
        };
    });

    const datesColumns = [datesRow];



    return {datesColumns, namesRows, matrixRows};
};

const calculateNikoNikoMatrix = (data: ITeammateDto[]) => {
    const result = [];

    for (let i = 0; i < data.length - 1; i++) {
        const teammate = data[i];
        result.push({
            index: i,
            label: teammate.firstName + ' ' + teammate.surname,
            columns: calculateColumns(teammate)
        });
    }

    return result;
};

const calculateColumns = (teammate: ITeammateDto) => {
    const result = [];
    const moods = teammate.moods;
    for (let i = 0; i < moods.length; i++) {
        result.push({
            index: i,
            data: {
                mood: moods[i],
                teammate: teammate,
                date: moods[i].date
            },
            label: moods[i].date,
        });
    }

    return result;
};

