import { Component, OnInit } from '@angular/core';
import {CommerceService} from '../commerce.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails;

  constructor(private commSrvc: CommerceService) { }
  ngOnInit(): void {
    this.commSrvc.getOrderDetails().subscribe(data => this.orderDetails = data);

  }

}
