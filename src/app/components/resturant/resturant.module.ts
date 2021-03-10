import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResturantComponent } from './resturant.component';
import { TableListComponent } from './table-list/table-list.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const resturantroutes: Routes = [
  {
    path: '',
    component: ResturantComponent,
    children: [
      {
        path: 'table-list',
        component: TableListComponent
      },
      {
        path: 'reserve-table',
        component: BookingTableComponent
      },
      {
        path: '',
        component: TableListComponent
      },
    ]
  },

];

@NgModule({
  declarations: [ResturantComponent, TableListComponent, BookingTableComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(resturantroutes),
  ]
})
export class ResturantModule { }
