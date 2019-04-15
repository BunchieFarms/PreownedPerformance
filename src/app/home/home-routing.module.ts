import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
