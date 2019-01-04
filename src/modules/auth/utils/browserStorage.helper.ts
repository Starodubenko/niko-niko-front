const AUTH_TOKEN_NAME = 'NikoNikoToken';

export class BrowserStorageHelper {
    static getAuthToken = () => {
        if (window) {
            return window.localStorage.getItem(AUTH_TOKEN_NAME) ||
                   window.sessionStorage.getItem(AUTH_TOKEN_NAME);
        }

        return '';
    };

    static setAuthToken = (token: string, rememberMe: boolean = false) => {
        if (window) {
            rememberMe
                ? window.localStorage.setItem(AUTH_TOKEN_NAME, token)
                : window.sessionStorage.setItem(AUTH_TOKEN_NAME, token);
        }
    };

    static removeAuthToken = () => {
        if (window) {
            window.localStorage.removeItem(AUTH_TOKEN_NAME);
            window.sessionStorage.removeItem(AUTH_TOKEN_NAME);
        }
    };
}