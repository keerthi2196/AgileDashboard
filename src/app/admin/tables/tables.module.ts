import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TablesRoutingModule } from './tables-routing.module';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { TableExpandableRowsExample } from './tables/tables.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatCheckboxModule
  ],
  declarations: [TableExpandableRowsExample],
  providers: [DataService]
})
export class TablesModule {}
