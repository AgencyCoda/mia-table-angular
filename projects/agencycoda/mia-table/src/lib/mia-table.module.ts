import { MiaCoreModule } from '@agencycoda/mia-core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

/** */
import { MiaTableComponent } from './components/mia-table/mia-table.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';
import { SelectionColumnComponent } from './columns/selection-column/selection-column.component';
import { UserColumnComponent } from './columns/user-column/user-column.component';
import { DateColumnComponent } from './columns/date-column/date-column.component';
import { SelectColumnComponent } from './columns/select-column/select-column.component';
import { StatusColumnComponent } from './columns/status-column/status-column.component';
import { MoreColumnComponent } from './columns/more-column/more-column.component';
@NgModule({
  declarations: [MiaTableComponent, StringColumnComponent, SelectionColumnComponent, UserColumnComponent, DateColumnComponent, SelectColumnComponent, StatusColumnComponent, MoreColumnComponent],
  imports: [
    CommonModule,
    MiaCoreModule,

    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  exports: [
    MiaTableComponent
  ]
})
export class MiaTableModule { }
