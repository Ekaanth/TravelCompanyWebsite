import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Approutes } from './app.routing';
import { ExploreSikkimComponent } from './explore-sikkim/explore-sikkim.component';
import { ExploreSikkimModule } from './explore-sikkim/explore-sikkim.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
