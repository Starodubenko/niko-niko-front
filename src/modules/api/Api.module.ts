import {NgModule} from '@angular/core';
import {ApiTeammateService} from './services/apiTeammate.sevice';
import {ApiMoodService} from "./services/apiMood.service";


@NgModule({
    providers: [
        ApiTeammateService,
        ApiMoodService
    ]
})
export class ApiModule {
}
