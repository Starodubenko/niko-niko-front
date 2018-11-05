import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {NikoViewModule} from "../views/niko";
import {LoginViewModule} from "../views/logIn";
import {NotFoundViewModule} from "../views/notFound";
import {AppRoutesComponent} from "./AppRoutes.component";

@NgModule({
    declarations: [
        AppRoutesComponent
    ],
    imports: [
        LoginViewModule,
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
