import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableBodyCellComponent, DataTableBodyRowComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TreeModule} from 'angular-tree-component';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MobileNavComponent } from './navigation/mobile-nav/mobile-nav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {AppRouting} from './route/app.routing';
import {AdminComponent} from './reservation/admin/admin.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { MainContainerComponent } from './coreContainer';
import { ContainerLineEditComponent } from './coreContainer';
import { ContainerButtonComponent } from './coreContainer';
import { ContainerDropdownComponent } from './coreContainer';
import { ContainerTextComponent } from './coreContainer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MobileNavComponent,
    HeaderComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminComponent,
    ReservationDetailComponent,
    MainContainerComponent,
    ContainerLineEditComponent,
    ContainerButtonComponent,
    ContainerDropdownComponent,
    ContainerTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRouting,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    DataTableBodyCellComponent,
    DataTableBodyRowComponent,
    TreeModule,
    CurrencyPipe,
    DecimalPipe
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
