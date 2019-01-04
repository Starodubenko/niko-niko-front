import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service";
import {UserDto} from "../../../core/dto";

@Component({
    selector: 'app-user-info',
    templateUrl: './UserInfo.component.html',
    styleUrls: ['./UserInfo.css'],
})
export class UserInfoComponent implements OnInit {

    userInfo: UserDto;

    constructor(private authService: AuthService){}

    get userName() {
        return `${this.userInfo.name} ${this.userInfo.surname}`;
    }

    get team() {
        return this.userInfo.team;
    }

    ngOnInit(): void {
        this.userInfo = this.authService.getUserInfo();
    }
}
