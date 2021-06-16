import { Injectable } from '@angular/core';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class ConvertColorService {

  constructor() { }

  static convertColor(status: string) {
    switch(status) {
      case Status.CANCELLED:
        return 'status-danger';
      case Status.CONFIRMED:
        return 'status-info';
      case Status.DELIVERED:
        return 'status-warning';
      case Status.DRAFT:
        return 'status-secondary'
      case Status.CREATED:
        return 'status-primary'
    }
    return;
  }
}
