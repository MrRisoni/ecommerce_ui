import {Component, OnInit, Output} from '@angular/core';
import {CommerceService} from '../commerce.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product;

  constructor(private commSrvc: CommerceService) { }

  ngOnInit(): void {
    this.commSrvc.getProductDetails().subscribe(prod => this.product = prod);

  }

}
