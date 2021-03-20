import { MiaCoreModule } from '@agencycoda/mia-core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MiaTableComponent } from './components/mia-table/mia-table.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';

/** Angular Material */
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MiaTableComponent, StringColumnComponent],
  imports: [
    BrowserModule,
    MiaCoreModule,

    // Angular Material
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MiaTableComponent
  ]
})
export class MiaTableModule { }
