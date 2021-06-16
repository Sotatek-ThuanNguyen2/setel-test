import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/constants/product';
import { Status } from 'src/app/constants/status';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit, OnDestroy {

  responseData: any;
  id!: number;
  ngSubscription: Subscription[] = [];
  formGroup: FormGroup | undefined;
  constructor(
    private httpRequest: HttpClient,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.buildForm();
    this.getData();
  }

  ngOnDestroy() {
    this.ngSubscription.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  buildForm() {
    this.formGroup = this.fb.group({});
  }

  getData() {
    this.ngSubscription.push(this.httpRequest.get(environment.GET_DETAIL + `/${this.id}`).subscribe((data: Product) => {
      if(data.status === Status.CREATED) {
        data.status = Status.CONFIRMED;
      }
      this.responseData = data;
    }));
  }

  updateForm() {
    const data = this.formGroup?.get('formOrder')?.value;
    data.quantity = parseInt(data.quantity);
    this.ngSubscription.push(this.httpRequest.put(environment.GET_DETAIL + `/${this.id}`, data).subscribe(() => {
      this.toastr.info('Update successfully!', 'Update Order');
    }))
  }
}
