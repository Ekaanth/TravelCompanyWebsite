import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreSikkimComponent } from './explore-sikkim.component';
import { RouterModule } from '@angular/router';
import { explorerSikkimroutes } from './explore-sikkim.routing';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ExploreSikkimComponent],
})
export class ExploreSikkimModule { }
