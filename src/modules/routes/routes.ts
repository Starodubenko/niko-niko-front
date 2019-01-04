import {Route} from "@angular/router";
import {NikoViewComponent} from "../views/niko";
import {UnauthorizedViewComponent} from "../views/unauthorized";
import {NotFoundViewComponent} from "../views/notFound";
import {MainViewComponent} from "../views/main";

export const routes: Route[] = [
    { path: 'main', component: MainViewComponent },
    { path: 'calendar', component: NikoViewComponent },
    { path: 'login', component: UnauthorizedViewComponent },
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: NotFoundViewComponent }
];