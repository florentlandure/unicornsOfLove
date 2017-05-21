import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  @Input() gender: string;
  isMale: boolean;
  isFemale: boolean;
  isOther: boolean;

  constructor() { }

  ngOnInit() {
    this.isMale = (this.gender === 'M');
    this.isFemale = (this.gender === 'F');
    this.isOther = (this.gender === 'O');
  }

}
