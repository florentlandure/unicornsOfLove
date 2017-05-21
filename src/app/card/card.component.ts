import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Unicorn } from '../models/Unicorn';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() unicorn: Unicorn;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  deleteUnicorn(id: number) {
    this.delete.emit(id);
  }
}
