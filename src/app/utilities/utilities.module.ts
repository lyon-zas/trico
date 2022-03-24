import { NgModule } from '@angular/core';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities.component';
import { ViewProfileComponent } from './viewProfile/view-profile/view-profile.component';
import { EditProfileComponent } from './editProfile/edit-profile/edit-profile.component';
import { Error404Component } from './pageNotFound/error404/error404.component';
import { SelectorComponent } from './NavSideBarFooter/selector/selector.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from '@angular/cdk/layout';
import { PasswordResetComponent } from './forgotPasswords/password-reset/password-reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
]

const cdkLayout = [
  LayoutModule
]

@NgModule({
  declarations: [
    UtilitiesComponent,
    ViewProfileComponent,
    EditProfileComponent,
    Error404Component,
    SelectorComponent,
    PasswordResetComponent
  ],
  imports: [
    UtilitiesRoutingModule,
    materialModules,
    cdkLayout,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    materialModules,
    cdkLayout,
    SelectorComponent,
    UtilitiesComponent
  ]

})
export class UtilitiesModule { }
