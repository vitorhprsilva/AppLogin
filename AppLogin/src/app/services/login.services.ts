import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient){ }

    protected UrlServiceV1: string = "http://localhost:3000/"

    cadastrarLogin(email: string, password: string){
        this.http.post(this.UrlServiceV1+'login', {email,password});
    }

}