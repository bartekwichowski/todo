import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatDatetimepickerModule } from "@mat-datetimepicker/core";
import { MatMomentDatetimeModule } from "../provider";

@NgModule({
imports: [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatDatetimepickerModule,
  MatMomentDatetimeModule
],
exports: [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatDatetimepickerModule,
  MatMomentDatetimeModule
],
})
export class CustomMaterialModule { }