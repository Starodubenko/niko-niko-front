import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service";
import {AuthGuard} from "./guard";
import {SignInFormComponent} from "./components/signInForm";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
      SignInFormComponent
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    exports: [
        SignInFormComponent
    ]
})
export class AuthModule {

}