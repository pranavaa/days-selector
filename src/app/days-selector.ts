import {Component} from '@angular/core';

@Component({
  selector: 'days-selector',
  templateUrl: 'days-selector.html',
  styleUrls: ['days-selector.css'],
})
export class DaysSelector {

  selectedDays: any = ['mon', 'wed'];

  valueChanged(e) {
    console.log(e);
  }
}