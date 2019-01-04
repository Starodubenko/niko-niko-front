import {Route} from "@angular/router";
import {NikoViewComponent} from "../views/niko";
import {UnauthorizedViewComponent} from "../views/unauthorized";
import {NotFoundViewComponent} from "../views/notFound";
import {MainViewComponent} from "../views/main";
import {AuthGuard} from "../auth/guard";

export const routes: Route[] = [
    { path: 'main', component: MainViewComponent, canActivate: [AuthGuard]},
    { path: 'calendar', component: NikoViewComponent },
    { path: 'unauthorized', component: UnauthorizedViewComponent, canActivate: [AuthGuard]},
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: NotFoundViewComponent }
];