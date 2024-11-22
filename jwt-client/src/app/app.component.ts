import { Component, OnInit } from '@angular/core';
import { SigninModel } from './signin/signin.model';
import { SigninService } from './signin/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'UserDetails-jwt-client';

  tokenJwt: string = "jwt";

  model: SigninModel = {UserName: "test8", Password: "password"};

  constructor(private signinService: SigninService){}

  ngOnInit(): void {
    this.signinService.getToken(this.model).subscribe(
      data => {
        this.tokenJwt = data.token;
        console.log(data);
      }
    );
  }
}
