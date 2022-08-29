import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './core/api/api.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ApiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
