import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';

@NgModule({
  imports: [HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
