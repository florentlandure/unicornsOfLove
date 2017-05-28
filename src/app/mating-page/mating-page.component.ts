import { Component, OnInit } from '@angular/core';
import { Unicorn } from 'app/models/Unicorn';
import { UnicornService } from 'app/unicorn.service';

@Component({
  selector: 'app-mating-page',
  templateUrl: './mating-page.component.html',
  styleUrls: ['./mating-page.component.scss']
})
export class MatingPageComponent implements OnInit {
  unicorns: Unicorn[]; // Array of all unicorns
  unicornsLeft: Unicorn[]; // Array of unicorns left to select
  unicornOne: number; // First unicorn selected for mating
  unicornTwo: number; // Second unicorn selected for mating
  unicornOneSelected = false; // Is unicorn one selected ?
  noUnicorn: boolean; // Is the array of unicorns empty ?

  constructor(private unicornService: UnicornService) { }

  ngOnInit() {
    this.unicorns = this.unicornService.unicorns;
    this.noUnicorn = (this.unicorns.length > 1) ? false : true;

    if (!this.noUnicorn) {
      this.unicornOne = 0;
      this.unicornTwo = 1;
      this.unicornsLeft = this.unicorns.slice(this.unicorns.findIndex(unicorn => {
        return unicorn.isEqualTo(this.unicornOne);
      }));
    }
  }
  selectOne(id: number) {
    this.unicornOne = id;
    console.log(this.unicornOne, this.unicornTwo);
  }
}
