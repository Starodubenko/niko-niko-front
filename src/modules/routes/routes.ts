import {Route} from "@angular/router";
import {NikoViewComponent} from "../views/niko";
import {LoginViewComponent} from "../views/logIn";
import {NotFoundViewComponent} from "../views/notFound";

export const routes: Route[] = [
    { path: 'calendar', component: NikoViewComponent },
    { path: 'login', component: LoginViewComponent },
    { path: '',   redirectTo: '/calendar', pathMatch: 'full' },
    { path: '**', component: NotFoundViewComponent }
];