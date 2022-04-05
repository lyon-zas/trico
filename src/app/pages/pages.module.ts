import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ChatComponent } from './chats/chat/chat.component';
import { ChannelsComponent } from './channels/channels/channels.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { ManageRoleComponent } from './manageRole/manage-role/manage-role.component';
import { AccessContolComponent } from './accessControls/access-contol/access-contol.component';
import { UserActivityComponent } from './userActivities/user-activity/user-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ViewListComponent } from './viewList/view-list/view-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import{NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './filterPipe/filter.pipe';
import { FormPopUpComponent } from './popUp/form-pop-up/form-pop-up.component';
import { SelectPipe } from './boxFilter/select.pipe';
import { Error404Component } from './error404/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';


const materialModules = [
  MatTabsModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
  MatSortModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  NgxPaginationModule
]





@NgModule({
  declarations: [
    PagesComponent,
    ChatComponent,
    ChannelsComponent,
    TasksComponent,
    CalendarComponent,
    ManageUsersComponent,
    ManageRoleComponent,
    AccessContolComponent,
    UserActivityComponent,
    ViewListComponent,
    FilterPipe,
    FormPopUpComponent,
    SelectPipe,
    Error404Component
  ],
  imports: [
    PagesRoutingModule,
    UtilitiesModule,
    materialModules,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    materialModules
  ]

})
export class PagesModule { }
