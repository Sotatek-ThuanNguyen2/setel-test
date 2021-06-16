import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConvertColorService } from 'src/app/constants/convert-color.service';
import { Product } from 'src/app/constants/product';
import { Status } from 'src/app/constants/status';
import { phoneValidator } from '../custom-validate/validate-phone';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit, OnChanges {

  @Input()
  formGroup: FormGroup | undefined;
  @Input()
  data: Product | undefined;
  @Input()
  isDetail: boolean = false;

  formOrder: FormGroup | undefined;

  seletedFile: File | undefined;

  status = Status;
  @ViewChild('file', {static: false}) file: any;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.data) {
      this.patchValue(changes.data.currentValue);
    }
  }

  buildForm() {
    this.formOrder = this.fb.group({
      productName: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.pattern(/[0-9]/g)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, phoneValidator()]],
      deliveryAddress: [null, [Validators.required]],
      customerName: [null, [Validators.required]],
      image: [null],
      status: [Status.DRAFT],
      pin: [null],
      id: [null],
      createdAt: [null],
    });
    this.formGroup?.addControl('formOrder', this.formOrder);
  }

  patchValue(data: Product) {
    this.formOrder?.patchValue({
      productName: data.productName,
      quantity: data.quantity,
      email: data.email,
      phone: data.phone,
      deliveryAddress: data.deliveryAddress,
      customerName: data.customerName,
      image: data.image,
      status: data.status,
      pin: data.pin,
      id: data.id,
      createdAt: data.createdAt
    })
    // this.seletedFile = data.image;
  }

  convert(status: string) {
    return ConvertColorService.convertColor(status);
  }

  cancelOrder() {
    this.formOrder?.get('status')?.setValue(Status.CANCELLED);
  }
}
