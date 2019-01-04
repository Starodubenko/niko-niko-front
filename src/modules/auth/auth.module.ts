import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service";
import {AuthGuard} from "./guard";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class AuthModule {

}