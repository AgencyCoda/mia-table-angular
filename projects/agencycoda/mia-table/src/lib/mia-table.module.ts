import { MiaCoreModule } from '@agencycoda/mia-core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/** Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

/** */
import { MiaTableComponent } from './components/mia-table/mia-table.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';
import { SelectionColumnComponent } from './columns/selection-column/selection-column.component';
@NgModule({
  declarations: [MiaTableComponent, StringColumnComponent, SelectionColumnComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MiaCoreModule,

    // Angular Material
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  exports: [
    MiaTableComponent
  ]
})
export class MiaTableModule { }
