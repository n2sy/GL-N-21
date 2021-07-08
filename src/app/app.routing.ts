import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { LogDeactiveGuard } from './guards/log-deactive.guard';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginComponent } from './login/login.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { RegisterComponent } from './register/register.component';
import { RhComponent } from './rh/rh.component';
import { ServersComponent } from './servers/servers.component';
import { UpdateComponent } from './update/update.component';

const myroutes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    // component: CvComponent,
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [LoginGuard] },
      { path: ':id', component: InfosComponent },
      {
        path: 'edit/:id',
        component: UpdateComponent,
        canActivate: [LoginGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuard],
    canDeactivate: [LogDeactiveGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'rh', component: RhComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'word', component: MsWordComponent },
];

export const APP_ROUTING = RouterModule.forRoot(myroutes);
