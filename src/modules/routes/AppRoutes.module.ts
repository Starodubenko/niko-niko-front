import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {NikoViewModule} from "../views/niko";
import {UnauthorizedViewModule} from "../views/unauthorized";
import {NotFoundViewModule} from "../views/notFound";
import {AppRoutesComponent} from "./AppRoutes.component";
import {MainViewModule} from "../views/main";

@NgModule({
    declarations: [
        AppRoutesComponent
    ],
    imports: [
        MainViewModule,
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
