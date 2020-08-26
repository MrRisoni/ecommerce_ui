import { Component, OnInit } from '@angular/core';
import {CommerceService} from '../commerce.service';

@Component({
  selector: 'app-rules-creator',
  templateUrl: './rules-creator.component.html',
  styleUrls: ['./rules-creator.component.css']
})
export class RulesCreatorComponent implements OnInit {

  operators: any[];
  parameters: any[];

  constructor(private commSrvc: CommerceService) { }
  ngOnInit(): void {
    this.commSrvc.getPayRulesRestrictionOperators().subscribe(data => this.operators = data);
    this.commSrvc.getPayRulesRestrictionParameters().subscribe(data => this.parameters = data);

  }

}
