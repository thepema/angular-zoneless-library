import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';
import { ZonelessModule } from 'src/zoneless/zoneless.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent,
  ],
  imports: [
    BrowserModule,
    ZonelessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
