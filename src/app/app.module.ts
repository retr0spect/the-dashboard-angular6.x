import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSidenavModule,
  MatRadioModule, MatIconModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {SideDrawerContainerComponent} from './component/side-drawer-container/side-drawer-container.component';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './component/summary/summary.component';
import { KeyManagementComponent } from './component/key-management/key-management.component';
import {ChartsModule} from 'ng2-charts';
import { BarchartComponent } from './component/barchart/barchart.component';
import { LinechartComponent } from './component/linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    SideDrawerContainerComponent,
    SummaryComponent,
    KeyManagementComponent,
    BarchartComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatRadioModule,
    FormsModule,
    FontAwesomeModule,
    MatIconModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
