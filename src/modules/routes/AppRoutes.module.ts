import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {AppRoutesComponent} from "./AppRoutes.component";
import {
    NikoViewModule,
    UnauthorizedViewModule,
    NotFoundViewModule,
    MainViewModule,
    TeamViewModule
} from "../views";


@NgModule({
    declarations: [
        AppRoutesComponent
    ],
    imports: [
        MainViewModule,
        TeamViewModule,
        UnauthorizedViewModule,
        NikoViewModule,
        NotFoundViewModule,
        RouterModule.forRoot(
            routes
        ),
    ],
    exports: [
        AppRoutesComponent
    ]
})
export class AppRoutingModule {
}
