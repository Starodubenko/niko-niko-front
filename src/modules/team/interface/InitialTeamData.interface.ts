import {IShortTeamDto} from "../../core/dto";

export interface IInitialTeamData {
    currentTeamId: string;
    teamList: IShortTeamDto[];
}