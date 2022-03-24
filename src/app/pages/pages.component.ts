import { Component, OnInit } from '@angular/core';
import { User } from '../userClass/user';
import { HttpAPIsService } from '../RestAPI/http-apis.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormPopUpComponent } from './popUp/form-pop-up/form-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  users: User[] = [];
  user: User = new User(0,'','','','','','','','','','');
  isPopUpOpened: Boolean = true;
  constructor(private service: HttpAPIsService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  getItems(){
    this.user = this.service.getUserArray();
  }

  editProfile(user: User){
    this.service.setUserArray(user);
    this.service.setIsEdit(true);
    this.isPopUpOpened = true;
    const dialogRef = this.dialog.open(FormPopUpComponent,{
      data: user
    })
    dialogRef.afterClosed().subscribe((elem:any) =>{
      this.isPopUpOpened = false;
      console.log("Edited Arrays>>", elem);
    })
  }

  ngOnInit(): void {
    this.getItems();
  }

}
