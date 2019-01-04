import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AuthService} from "../../service";
import {UserDto} from "../../../core/dto";

@Component({
    selector: 'app-user-info',
    templateUrl: './UserInfo.component.html',
    styleUrls: ['./UserInfo.css'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject();

    userInfo: UserDto;

    constructor(private authService: AuthService) {}

    get userName() {
        return this.userInfo && `${this.userInfo.name} ${this.userInfo.surname}`;
    }

    get team() {
        return this.userInfo && this.userInfo.team;
    }

    ngOnInit(): void {
        this.authService.getUserInfo$()
            .pipe(
                takeUntil(this.destroy$),
            )
            .subscribe(userInfo => {
                this.userInfo = userInfo;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }
}
