import { Component, OnInit } from '@angular/core';
import {CommerceService} from '../commerce.service';
import {root} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-rules-pay-restrict',
  templateUrl: './rules-pay-restrict.component.html',
  styleUrls: ['./rules-pay-restrict.component.css']
})
export class RulesPayRestrictComponent implements OnInit {

  Rules: any[];

  constructor(private commSrvc: CommerceService) { }
  ngOnInit(): void {
    this.commSrvc.getPayRulesRestriction().subscribe(ruleData => {
     //
      this.Rules = ruleData.map(rul => {
         return {id: rul.id, title: rul.title, methods: rul.disabledMethods.map(mth => mth.code).join(',')};
      });
    });

  }

}
