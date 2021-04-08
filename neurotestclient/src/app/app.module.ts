import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestingModuleComponent } from './testing-module/testing-module.component';

const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    TestingModuleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
