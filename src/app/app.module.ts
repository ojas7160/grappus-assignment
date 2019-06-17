import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// bootstrap module
import { BootstrapModule } from './bootstrap.module';
import { HeaderComponent } from './header/header.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightSideComponent,
    LeftSideComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
