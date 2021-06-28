import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ServersComponent } from './servers/servers.component';
import { UpdateComponent } from './update/update.component';

const myroutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      //   { path: '', component: CvComponent },
      { path: ':id', component: InfosComponent },
      { path: 'edit/:id', component: UpdateComponent },
    ],
  },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'cv/edit/:id', component: UpdateComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'word', component: MsWordComponent },
];

export const APP_ROUTING = RouterModule.forRoot(myroutes);
