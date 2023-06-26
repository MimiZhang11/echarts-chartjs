import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EchartsComponent } from './components/echarts/echarts.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartsComponent,
    ChartjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
