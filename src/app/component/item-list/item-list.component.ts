import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/constants/product';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input()
  data: Product = {};
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showDetail(id: any) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

}
