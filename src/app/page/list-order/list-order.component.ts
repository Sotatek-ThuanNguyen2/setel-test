import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/constants/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit, OnDestroy {

  responseData: any;
  ngSubscription: Subscription[] = [];
  constructor(
    private httpRequest: HttpClient
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy() {
    this.ngSubscription.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getData() {
    this.ngSubscription.push(this.httpRequest.get(environment.GET_ALL_LIST).subscribe((data) => {
      this.responseData = data;
    }));
  }
}
