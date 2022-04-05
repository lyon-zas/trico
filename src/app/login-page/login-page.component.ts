import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginAuthService } from '../AuthToken/login-auth.service';
import { LogoutFirstGuard } from '../routeGuard/logout-first.guard';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userMail: string | any = '';
  password: string | any = '';

  constructor(private router: Router, private route: ActivatedRoute, private auth: LoginAuthService, private fb: FormBuilder, private guard: LogoutFirstGuard, private http: HttpClient) { }

  loginForm = this.fb.group({
    userMail: ['', Validators.required],
    password: ['', Validators.required]
  })

  // submit($event: any): void{
  //   if(this.loginForm.valid){
  //     this.auth.login(this.loginForm.value).subscribe((result) =>{
  //       this.router.navigate(['/pages/chats'], {relativeTo: this.route}), result;
  //       localStorage.setItem('userMail', this.loginForm.value.userMail);
  //       console.log("Successful Login Attempt>>", $event);
  //     },
  //     (err: Error) =>{
  //       alert(err.message);
  //     }
  //     )
  //     let inputUserMail = <HTMLInputElement>document.getElementById('inputEmail3');
  //     let inputPassword = <HTMLInputElement>document.getElementById('inputPassword3');

  //     inputUserMail.value = '';
  //     inputPassword.value = '';
  //   }
  // }

  submit($event:any){
    this.http.get('https://tricomms-2fe5d-default-rtdb.firebaseio.com/users.json').subscribe((users:any)=>{
      console.log("users>>", users, $event);
      localStorage.setItem('userMail', this.loginForm.value.userMail)
    })
  }



  toAdminLoginPage(){
    this.router.navigate(['/LoginPage/adminLoginPage']);
  }

  resetPasswordPage(){
    this.router.navigate(['/utilities/passwordReset'],{relativeTo: this.route});
  }

  logOutBeforeLogInAgain(){
    if(this.auth.isLoggedIn() && !this.guard.canActivate == false){
      this.router.navigate(['/utilities/dashboard'], {relativeTo: this.route});
    }
  }

  ngOnInit(): void {
    this.logOutBeforeLogInAgain()
  }

}
