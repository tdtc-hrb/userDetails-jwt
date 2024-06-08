import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SigninModel } from "./signin.model";

@Injectable({
    providedIn: 'root'
})
export class SigninService {
    url_dotnet_jwt = "https://192.168.0.104:7087/login";

    constructor(private http : HttpClient) { }

    getToken(signinModel: SigninModel) : Observable<any> {
        const headers = new HttpHeaders( { 'Content-Type': 'application/json' } );

        return this.http.post<SigninModel>(
            this.url_dotnet_jwt, 
            JSON.stringify(signinModel), 
            {'headers': headers} 
        );
    }
}