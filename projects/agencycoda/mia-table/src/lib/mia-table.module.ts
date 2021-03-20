import { MiaCoreModule } from '@agencycoda/mia-core';
import { NgModule } from '@angular/core';
import { MiaTableComponent } from './components/mia-table/mia-table.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';

@NgModule({
  declarations: [MiaTableComponent, StringColumnComponent],
  imports: [
    MiaCoreModule
  ],
  exports: []
})
export class MiaTableModule { }
