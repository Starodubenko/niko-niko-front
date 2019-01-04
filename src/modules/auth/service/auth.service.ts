import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BrowserStorageHelper} from "../utils";

@Injectable()
export class AuthService {

    constructor(private readonly http: HttpClient) {}

    signIn(username: string, password: string, rememberMe: boolean): Observable<string> {
        return this.http.post<string>('/api/auth/signIn', {
            username,
            password
        }).pipe(
            tap((data: any) => {
                BrowserStorageHelper.setAuthToken(data.token, rememberMe)
            }),
            catchError((e: any) => {
                return of(e);
            })
        );
    }

    signOut() {
        BrowserStorageHelper.removeAuthToken();
    }

    signUp(): Observable<string> { //token in response
        return this.http.post<string>('/api/auth/signUp', {});
    }

    checkUrlPathAccessibility(path: string): Observable<boolean> {
        const token = BrowserStorageHelper.getAuthToken();

        return this.http.post<boolean>('/api/auth/checkUrlPathAccessibility', {
            token,
            path
        });
    }
}