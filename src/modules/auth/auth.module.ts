import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./service";
import {AuthGuard} from "./guard";
import {SignInFormComponent} from "./components/signInForm";
import {SignOutButtonComponent} from "./components/signOutButton";

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        SignInFormComponent,
        SignOutButtonComponent
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    exports: [
        SignInFormComponent,
        SignOutButtonComponent
    ]
})
export class AuthModule {

}