import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginAuthService } from 'src/app/AuthToken/login-auth.service';
import { User } from 'src/app/userClass/user';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;

  userMail: string | any = '';
  users: User[] = [];


  constructor(private observer: BreakpointObserver, private router: Router, private route: ActivatedRoute, private auth: LoginAuthService, private service: HttpAPIsService) { }

  ngOnInit(): void {
    this.getUserName()
  }

  getUserName(){
    this.userMail = localStorage.getItem('userMail');
    return this.userMail = this.userMail;
  }



  viewProfilePage(){
    this.router.navigate(['/utilities/viewProfile'], {relativeTo: this.route})
  }

  editProfile(){
    this.router.navigate(['/utilities/editProfile'], {relativeTo: this.route})
  }
  routeToChatsPage(){
    this.router.navigate(['/pages/chats'], {relativeTo: this.route})
  }
  routeToChannels(){
    this.router.navigate(['/pages/channels'], {relativeTo: this.route})
  }
  routeToTasks(){
    this.router.navigate(['/pages/tasks'], {relativeTo: this.route})
  }
  routeToCalendarPage(){
    this.router.navigate(['/pages/calendar'], {relativeTo: this.route})
  }

  ngAfterViewInit(): void {
      this.observer.observe(['(max-width: 800px)']).subscribe((elem) =>{
        if(elem.matches){
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      })
  }

  logOutFromApp(): void{
    this.auth.logout();
  }
}
