import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';
import { User } from 'src/app/userClass/user';
import { MatDialog } from '@angular/material/dialog';
import { FormPopUpComponent } from '../../popUp/form-pop-up/form-pop-up.component';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private service: HttpAPIsService, private dialog: MatDialog) { }

  users: User[] = [];
  p:number = 1;
  isPopUpOpened: Boolean = true;

  filterString: string = '';
  activatedStatus: number = 0;
  deactivatedStatus: number = 0;

  totalAdmins: number = 0;
  totalCandidates: number = 0;



  routeToManageRole(){
    this.router.navigate(['/pages/manageUsers'],{relativeTo:this.route});
  }

  getAccountStatus(){
    this.service.getUsersArray().subscribe((data:any)=>{
      var usersFromDB = data;
      var activatedStatusCount = usersFromDB.filter((elem:any)=> elem.accountStatus == 'activated');
      var deactivatedStatusCount = usersFromDB.filter((elem:any)=> elem.accountStatus == 'deactivated');

      this.activatedStatus = activatedStatusCount.length;
      this.deactivatedStatus = deactivatedStatusCount.length;
    })
  }

  getUserRole(){
    this.service.getUsersArray().subscribe((info:any)=>{
      var usersFromDB = info;
      var totalAdminsCount = usersFromDB.filter((tricomm:any)=>tricomm.userRole == 'Admin');
      var totalCandidatesCount = usersFromDB.filter((tricomm:any)=> tricomm.userRole == 'Candidate');

      this.totalAdmins =totalAdminsCount.length;
      this.totalCandidates = totalCandidatesCount.length;
    })
  }


  getAllUsers(){
    this.service.getUsersArray().subscribe(tricomms=>{
      this.users = tricomms;
      console.log("Table Arrays>>", this.users, tricomms);
    })
  }



  editUser(user:User){
    this.service.setUserArray(user);
    this.service.setIsEdit(true);
    this.isPopUpOpened = true;
    const dialogRef = this.dialog.open(FormPopUpComponent,{
      data: {}
    })
    dialogRef.afterClosed().subscribe((elem:any)=>{
      this.isPopUpOpened = false;
      console.log("Edited Arrays>>", elem);
    })
  }

  deleteUser(user:User){
    this.service.apiDeleteUserArray(user.userId).subscribe((data:any)=>{
      console.log('deleted row>>',user.userId, "deleted row's current value>>", data, "current table>>",this.users);
      this.ngOnInit();
    })
  }


  ngOnInit(): void {
    this.getAllUsers();
    this.getAccountStatus();
    this.getUserRole();
  }

}
