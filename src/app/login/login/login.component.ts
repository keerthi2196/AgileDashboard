import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel: UserModel = new UserModel();
  constructor(private router: Router, private authService: AuthenticateService) { }

  ngOnInit() { }
  onLogin() {
    this.authService.authenticateUser(this.userModel).subscribe(res => {
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/dashboard']);
    });
  }
}

export class UserModel {
  userEmail: string;
  userName: string;
  password: string;
  roles: string[];
}
