import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stern',
  templateUrl: './stern.component.html',
  styleUrls: ['./stern.component.css']
})
export class SternComponent implements OnInit {
  @Input() rating: any;
  starClass: any[];

  constructor() {}

  ngOnInit(): void {
    this.starClass = [];

    var no_more_stars = 0;
    var times = 0;
    var sum = 0;
    while (sum < this.rating) {
      sum++;
      times++;
    }
    if (sum > this.rating) {
      times--;
    }

    for (var i = 1; i < 6; i++) {
      let classStr = 'stern';
      if (no_more_stars == 0) {
        if (times > i) {
          classStr += ' on';
        } else {
          classStr += ' half';
          no_more_stars = 1;
        }
      }

      this.starClass.push(classStr);
    }
  }
}
