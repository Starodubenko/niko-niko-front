import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {TeamRoutingComponent} from "./TeamRouting.component";
import {TeammateListViewModule} from "../teammateList";
import {TeamMainViewModule} from "../main";


@NgModule({
    declarations: [
        TeamRoutingComponent
    ],
    imports: [
        TeamMainViewModule,
        TeammateListViewModule,
        RouterModule.forChild(
            routes
        ),
    ],
    exports: [
        TeamRoutingComponent
    ]
})
export class TeamRoutingModule {
}
