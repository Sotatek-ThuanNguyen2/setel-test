import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  formGroup: FormGroup | undefined;
  constructor(
    private fb: FormBuilder,
    private httpRequest: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({});
  }

  createOrder() {
    this.formGroup?.get('formOrder')?.markAsDirty();
    this.formGroup?.get('formOrder')?.markAllAsTouched();
    if(this.formGroup?.get('formOrder')?.valid) {
      let data = this.formGroup?.get('formOrder')?.value;
      delete data.status;
      data.quantity = parseInt(data.quantity);
      this.httpRequest.post(environment.GET_DETAIL, data).subscribe(() => {
        this.toastr.success('Create order successfully!', 'Success');
      });
    }
  }
}
