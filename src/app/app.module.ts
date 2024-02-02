import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NbCardModule, NbChatModule, NbLayoutModule, NbSpinnerModule, NbThemeModule } from '@nebular/theme';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    NbChatModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
