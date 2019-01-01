import {Route} from "@angular/router";
import {NikoViewComponent} from "../views/niko";
import {LoginViewComponent} from "../views/logIn";
import {NotFoundViewComponent} from "../views/notFound";
import {MainViewComponent} from "../views/main";

export const routes: Route[] = [
    { path: 'main', component: MainViewComponent },
    { path: 'calendar', component: NikoViewComponent },
    { path: 'login', component: LoginViewComponent },
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: NotFoundViewComponent }
];