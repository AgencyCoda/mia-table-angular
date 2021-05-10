import { MiaCoreModule } from '@agencycoda/mia-core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

/** Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

/** Others libraries */
import { MiaLoadingModule } from '@agencycoda/mia-loading';
import { StorageModule } from '@ngx-pwa/local-storage';

/** */
import { MiaTableComponent } from './components/mia-table/mia-table.component';
import { BaseColumnComponent } from './columns/base-column.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';
import { SelectionColumnComponent } from './columns/selection-column/selection-column.component';
import { UserColumnComponent } from './columns/user-column/user-column.component';
import { DateColumnComponent } from './columns/date-column/date-column.component';
import { SelectColumnComponent } from './columns/select-column/select-column.component';
import { StatusColumnComponent } from './columns/status-column/status-column.component';
import { MoreColumnComponent } from './columns/more-column/more-column.component';
import { IconToggleColumnComponent } from './columns/icon-toggle-column/icon-toggle-column.component';
import { PhotoColumnComponent } from './columns/photo-column/photo-column.component';
import { CustomColumnComponent } from './columns/custom-column/custom-column.component';
import { MiaEditColumnsComponent } from './components/mia-edit-columns/mia-edit-columns.component';
@NgModule({
  declarations: [
    MiaTableComponent,
    BaseColumnComponent,
    StringColumnComponent,
    SelectionColumnComponent,
    UserColumnComponent,
    DateColumnComponent,
    SelectColumnComponent,
    StatusColumnComponent,
    MoreColumnComponent,
    IconToggleColumnComponent,
    PhotoColumnComponent,
    CustomColumnComponent,
    MiaEditColumnsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StorageModule,
    MiaCoreModule,
    MiaLoadingModule,

    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSelectModule,
    MatListModule
  ],
  exports: [
    MiaTableComponent,
    MiaEditColumnsComponent
  ]
})
export class MiaTableModule { }
