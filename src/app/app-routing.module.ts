import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './page/create-order/create-order.component';
import { DetailOrderComponent } from './page/detail-order/detail-order.component';
import { ListOrderComponent } from './page/list-order/list-order.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListOrderComponent
  },
  {
    path: '',
    component: ListOrderComponent
  },
  {
    path: 'create',
    component: CreateOrderComponent
  },
  {
    path: 'detail/:id',
    component: DetailOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
