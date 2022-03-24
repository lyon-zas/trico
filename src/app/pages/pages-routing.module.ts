import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChannelsComponent } from './channels/channels/channels.component';
import { ChatComponent } from './chats/chat/chat.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { ManageRoleComponent } from './manageRole/manage-role/manage-role.component';
import { AccessContolComponent } from './accessControls/access-contol/access-contol.component';
import { UserActivityComponent } from './userActivities/user-activity/user-activity.component';
import { ViewListComponent } from './viewList/view-list/view-list.component';
import { FormPopUpComponent } from './popUp/form-pop-up/form-pop-up.component';
import { Error404Component } from './error404/error404/error404.component';

const routes: Routes = [
  { path: 'pages', component: PagesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'chats', component: ChatComponent },
  { path: 'tasks', component: TasksComponent },
  {path: 'manageUsers', component: ManageUsersComponent},
  {path: 'manageRole', component: ManageRoleComponent},
  {path: 'accessControl', component: AccessContolComponent},
  {path: 'userActivity', component: UserActivityComponent},
  {path: 'viewList', component: ViewListComponent},
  {path: 'formPopUp', component: FormPopUpComponent},
  {path: 'pageNotFound', component:Error404Component},
  {path: '**', redirectTo:'pageNotFound'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
