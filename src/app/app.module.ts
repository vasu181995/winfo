import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule  } from '@angular/common/http';
import { TodoService } from './todo.service';
import { ToDoPipe } from './todo.pipe';
import {MatInputModule} from '@angular/material/input';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { DetailComponent } from './detail/detail.component';
import { DetailModule } from './detail/detail.module';
import { DetailsComponent } from './home/details/details.component';
import { DetailsModule } from './home/details/details.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToDoPipe,
    ContactComponent,
    HeaderComponent,
    DetailComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ContactModule,
    HeaderModule,
    DetailModule,
    DetailsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
