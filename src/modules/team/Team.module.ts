import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TeamService} from "./service/Team.service";
import {ApiModule} from "../api";

@NgModule({
    imports: [
        BrowserModule,
        ApiModule,
    ],
    providers: [
        TeamService
    ]
})
export class TeamModule {
}
