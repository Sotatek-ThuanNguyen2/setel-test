import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormOrderComponent } from './form-order/form-order.component';

@NgModule({
  declarations: [
    FormOrderComponent
  ],
	exports: [
    FormOrderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ]
})

export class SharedModule {}