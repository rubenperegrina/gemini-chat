import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbChatModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbChatModule,
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
