import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableExpandableRowsExample } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: TableExpandableRowsExample
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
