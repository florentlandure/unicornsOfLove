import { Component, OnInit } from '@angular/core';
import { Unicorn } from 'app/models/Unicorn';
import { UnicornService } from 'app/unicorn.service';
import { CardComponent } from 'app/card/card.component';

@Component({
  selector: 'app-mating-page',
  templateUrl: './mating-page.component.html',
  styleUrls: ['./mating-page.component.scss']
})
export class MatingPageComponent implements OnInit {
  unicorns: Unicorn[]; // Array of all unicorns
  unicornsLeft: Unicorn[]; // Array of unicorns left to select
  unicornOne: Unicorn; // First unicorn selected for mating
  unicornTwo: Unicorn; // Second unicorn selected for mating
  unicornOneSelected = false; // Is unicorn one selected ?
  noUnicorn: boolean; // Is the array of unicorns empty ?

  constructor(private unicornService: UnicornService) { }

  ngOnInit() {
    this.unicorns = this.unicornService.getMatableUnicorns();
    this.noUnicorn = (this.unicorns.length > 1) ? false : true;

    if (!this.noUnicorn) {
      this.unicornOne = this.unicorns[0];
      this.unicornsLeft = this.unicornService.getOppositeGender(this.unicornOne);
      this.unicornTwo = this.unicornsLeft[0];
    }
  }
  selectOne(id: number) {
    this.unicornOne = this.unicorns[id];
    this.unicornsLeft = this.unicornService.getOppositeGender(this.unicornOne);
  }
}
