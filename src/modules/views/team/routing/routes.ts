import {Route} from "@angular/router";
import {TeammateListViewComponent} from "../teammateList";
import {TeamMainViewComponent} from "../main/TeamMainView.component";


export const routes: Route[] = [
    { path: 'team', component: TeamMainViewComponent,
        // , canActivate: [TeamViewGuard],
        children: [
            {
                path: ':id',
                component: TeammateListViewComponent,
                // children: [
                //     { path: 'teammate/:id',  TeammateMoodView }
                // ]
            },
        ]
    },
    { path: '', redirectTo: '/team', pathMatch: 'full' },
];