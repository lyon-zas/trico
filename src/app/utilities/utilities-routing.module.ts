import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesComponent } from './utilities.component';
import { EditProfileComponent } from './editProfile/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './viewProfile/view-profile/view-profile.component';
import { Error404Component } from './pageNotFound/error404/error404.component';
import { SelectorComponent } from './NavSideBarFooter/selector/selector.component';
import { PasswordResetComponent } from './forgotPasswords/password-reset/password-reset.component';

const routes: Routes = [
  { path: 'adminDashboard', component: UtilitiesComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'viewProfile', component: ViewProfileComponent },
  { path: 'dashboard', component: SelectorComponent },
  {path: 'passwordReset', component: PasswordResetComponent},
  { path: 'pageNotFound', component: Error404Component },
  {path:'**', redirectTo: 'pageNotFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
