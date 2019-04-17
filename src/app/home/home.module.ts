import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { HomeComponent } from '../home/component/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CarouselModule,
        WavesModule
    ],
    exports: [],
    providers: []
})

export class HomeModule { }
