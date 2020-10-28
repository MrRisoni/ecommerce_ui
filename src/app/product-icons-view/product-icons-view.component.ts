import { Component, OnInit } from '@angular/core';
import {CommerceService} from '../commerce.service';


@Component({
  selector: 'app-product-icons-view',
  templateUrl: './product-icons-view.component.html',
  styleUrls: ['./product-icons-view.component.css']
})
export class ProductIconsViewComponent implements OnInit {

  constructor(private commSrvc: CommerceService) { }

  products: any[];


  ngOnInit(): void {
    this.commSrvc.getProductsView().subscribe(data => this.products = data.products);

  }

}
