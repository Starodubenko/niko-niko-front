import {NgModule} from '@angular/core';
import {
    ApiTeammateService,
    ApiMoodService,
    ApiTeamService,
} from "./services";


@NgModule({
    providers: [
        ApiTeammateService,
        ApiMoodService,
        ApiTeammateService,
        ApiTeamService,
    ]
})
export class ApiModule {
}
