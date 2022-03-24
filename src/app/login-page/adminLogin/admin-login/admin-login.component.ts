import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService } from 'src/app/AuthToken/adminAuth/admin-auth.service';
import { AdminLogOutGuard } from 'src/app/routeGuard/adminGuard/admin-log-out.guard';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminMail: string | any = '';
  adminPassword: string | any = '';

  constructor( private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private adminAuth: AdminAuthService, private adminGuard: AdminLogOutGuard) { }
  adminLoginForm = this.fb.group({
    adminMail: ['', Validators.required],
    adminPassword: ['', Validators.required]
  })


  submit(){
    if(this.adminLoginForm.valid){
      this.adminAuth.adminLogIn(this.adminLoginForm.value).subscribe((elem)=>{
        this.router.navigate(['/pages/viewList'], {relativeTo: this.route}), elem;
        console.log('succesful adamin Login>>');
      },
      (err:Error)=>{
        alert(err.message);
      }
      )
      let inputAdminMail = <HTMLInputElement>document.getElementById('inputAdminEmail1');
      let inputAdminPassword = <HTMLInputElement>document.getElementById('inputAdminPassword1');

      inputAdminMail.value = '';
      inputAdminPassword.value = '';
    }

  }

  logOutBeforLoginAgain(){
  if(this.adminAuth.adminIsLoggedIn() && !this.adminGuard.canActivate == false){
    this.router.navigate(['/utilities/adminDashboard'], {relativeTo: this.route});
  }
  }
  ngOnInit(): void {
  }

  routeToLoginPage(){
    this.router.navigate(['/LoginPage/loginAuthentication'],{relativeTo: this.route});
  }

}
