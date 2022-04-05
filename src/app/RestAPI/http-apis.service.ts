import { Injectable } from '@angular/core';
import { NewUser } from '../pages/addNewUserClass/new-user';
import { HttpClient } from '@angular/common/http';
import { User } from '../userClass/user';

@Injectable({
  providedIn: 'root'
})
export class HttpAPIsService {

  newUsers: NewUser[] = [];
  newUser: any;
  users: User[] = [];
  user: any;

  userId: number = -1;
  isEdit: Boolean = false;
  url: string = 'http://localhost:8090/api';
  // url: string = 'http://ndnhpnsbydqbxy';

  constructor(private http: HttpClient) { }

  setUsersArray(user: User){
    return this.http.post(this.url + '/new', user)
  }

  fireBasePostUrl(user: User){
    this.http.post('https://tricomms-2fe5d-default-rtdb.firebaseio.com/users.json',user);
  }

  getUsersArray(){
    return this.http.get<User[]>(this.url + '/getAllTricomms');
  }

  setUserArray(user:User){
    return this.user = user;
  }

  getUserArray(){
    if(this.user == undefined || this.user == null){
      return null
    }else{
      return this.user;
    }
  }

  deleteUserArray(user:User){
    let userId = user.userId;
    return this.http.delete(this.url + '/deleteAnyUser/' + userId);
  }

  apiDeleteUserArray(id: number){
    return this.http.delete(this.url + '/deleteAnyUser/' + id);
  }

  updateUserArray(user: User){
    this.http.put(this.url + '/updateTricomms', user);
  }

  setIsEdit(isEdit: Boolean){
    return this.isEdit = isEdit;
  }

  getIsEdit(){
    return this.isEdit;
  }






}