import {UserDto} from "./User.dto";

export class UserMoodDto {
    id: string;
    date: string;
    mood: number;
    user: UserDto
}