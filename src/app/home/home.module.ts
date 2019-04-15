import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from '../home/component/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [],
    providers: []
})

export class HomeModule { }
