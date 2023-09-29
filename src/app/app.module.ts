import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { SportTabComponent } from './components/sport-tab/sport-tab.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordianTodayComponent } from './components/accordian-today/accordian-today.component';
import { AccordianTomorrowComponent } from './components/accordian-tomorrow/accordian-tomorrow.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    SportTabComponent,
    AccordianTodayComponent,
    AccordianTomorrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CdkAccordionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
