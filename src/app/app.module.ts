import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ServersComponent } from './servers/servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstService } from './services/first.service';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { NoImagePipe } from './no-image.pipe';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptorProvider } from './logtoken.interceptor';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { LogDeactiveGuard } from './guards/log-deactive.guard';
import { RhComponent } from './rh/rh.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ParentComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    MsWordComponent,
    ServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    NoImagePipe,
    UpdateComponent,
    LoginComponent,
    AddComponent,
    RegisterComponent,
    RhComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    DragDropModule,
  ],
  providers: [
    FirstService,
    AuthInterceptorProvider,
    LogoutGuard,
    LogDeactiveGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
