import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';
import { AccountStatus, User, UserRole } from 'src/app/userClass/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-pop-up',
  templateUrl: './form-pop-up.component.html',
  styleUrls: ['./form-pop-up.component.scss']
})
export class FormPopUpComponent implements OnInit {

  users: User[] = [];

  userId: number = 1;
  userName: string = '';
  webMail: string = '';
  firstName: string = '';
  lastName: string = '';
  accountStatus: AccountStatus = '';
  userRole: UserRole = '';
  password: string | any = '';
  confirmPassword: string | any = '';
  profilePicture: string | any = '';
  todayDate: Date | string = '';

  user: User = new User(this.userId, this.userName, this.webMail, this.firstName, this.lastName, this.accountStatus,this.userRole, this.password,this.confirmPassword, this.profilePicture, this.todayDate)

  url: any;
  msg:string = '';
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private service: HttpAPIsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormPopUpComponent>,
    private http: HttpClient
    ) { }

    closeDialog(): void{
      this.dialogRef.close();
    }

    public newUserForm!: FormGroup;

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      userName: ['', Validators.required],
      webMail: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      accountStatus: ['', Validators.required],
      userRole: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      profilePicture: ['', Validators.required],
      todayDate: [Date, Validators.required],
      userId: [1]
    })
    this.getPatchValue();
  }


  selectFile(event:any){
    if(!event.target.files[0] || event.target.files[0].length == 0){
      this.msg = 'you must select an image!'
      return
    }

    var mimeType = event.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.msg = "only images are supported";
      return
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) =>{
      this.msg = "";
      this.url = reader.result;
    }
  }

  // submit(){
  //   this.user = this.newUserForm.getRawValue();
  //   this.service.setUsersArray(this.user).subscribe((elem:any)=>{
  //     console.log("Arrays>>", this.newUserForm.value, elem);
  //     this.dialogRef.close();
  //   })
  // }

  submit(){
    this.user = this.newUserForm.getRawValue();
    this.http.post('https://tricomms-2fe5d-default-rtdb.firebaseio.com/users.json', this.newUserForm.value).subscribe((response:any)=>{
      console.log("Response>>", response);
    });
  }

  getPatchValue(){
    this.newUserForm.patchValue(this.service.getUserArray());
  }

}
