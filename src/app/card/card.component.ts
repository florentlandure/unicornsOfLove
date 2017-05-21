import { Component, OnInit, Input } from '@angular/core';
import { Unicorn } from '../models/Unicorn';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() unicorn: Unicorn;

  constructor() { }

  ngOnInit() {
  }

}
