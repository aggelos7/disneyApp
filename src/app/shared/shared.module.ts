import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './components/dialog/dialog.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CharactersComponent } from '../content/characters/characters.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    DialogComponent,
    ListComponent,
    FormComponent,
    CharactersComponent,
    DatatableComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
