import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';
import { User } from 'src/app/userClass/user';
import { MatDialog } from '@angular/material/dialog';
import { FormPopUpComponent } from '../../popUp/form-pop-up/form-pop-up.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {


  users: User[] = [];
  p:number = 1;
  filterString: string = '';
  isPopUpOpened: Boolean = true;
  imageDirectoryPath: any = 'http://localhost:8090/api';
  constructor(
    private service: HttpAPIsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private http: HttpClient
    ) { }


    popUpDialog(){
      this.isPopUpOpened = true;
      const dialogRef = this.dialog.open(FormPopUpComponent,{
        data: {}
      })
      dialogRef.afterClosed().subscribe((result: any) =>{
        this.isPopUpOpened = false;
        console.log("Page opened", result);
      })
    }

    viewUsersProfile(user:User){
      this.service.setUserArray(user);
      console.log("userProfile>>", user);
      this.router.navigate(['/pages/pages'],{relativeTo:this.route});
    }


  routeToViewList(){
    this.router.navigate(['/pages/viewList'],{relativeTo: this.route});
  }



  //  getUsers(){
  // this.service.getUsersArray().subscribe(tricomms =>{
  //   this.users = tricomms;
  //   console.log("New Table Arrays>>", this.users);
  // })
  //  }

   getFireBaseData(){
     this.http.get<User[]>('https://tricomms-2fe5d-default-rtdb.firebaseio.com/users.json').subscribe((response:any)=>{
       this.users = response;
       console.log("firsBaseTable>>", this.users);
     })
  }

   editUser(user:User){
     this.service.setUserArray(user);
     this.service.setIsEdit(true);
     this.isPopUpOpened = true;
     const dialogRef = this.dialog.open(FormPopUpComponent,{
       data: user
     })
     dialogRef.afterClosed().subscribe((elem:any)=>{
       this.isPopUpOpened = false;
       console.log("Edited Arrays>>", elem);
     })
    //  this.router.navigate(['/pages/createUser'],{relativeTo:this.route});
   }

   deleteUser(user: User){
     this.service.apiDeleteUserArray(user.userId).subscribe((data:any)=>{
       console.log('deleted row>>',user.userId, "deleted row's current value>>", data, "current table>>",this.users);
       this.ngOnInit();
     })
   }

  ngOnInit(): void {
    // this.getUsers();
    this.viewUsersProfile;
    this.getFireBaseData();
  }

}
