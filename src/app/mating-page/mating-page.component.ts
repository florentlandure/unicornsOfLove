import { Component, OnInit } from '@angular/core';
import { Unicorn } from 'app/models/Unicorn';
import { UnicornService } from 'app/unicorn.service';
import { CardComponent } from 'app/card/card.component';
import { ColorBlender } from 'assets/scripts/color-blend';
import { Router } from '@angular/router';

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
  unicornChild: Unicorn = null; // Possible child
  unicornOneSelected = false; // Is unicorn one selected ?
  noUnicorn: boolean; // Is the array of unicorns empty ?
  colorBlender: ColorBlender = new ColorBlender();
  haveMated = false;

  constructor(private unicornService: UnicornService, private router: Router) { }

  ngOnInit() {
    this.unicorns = this.unicornService.getMatableUnicorns();
    this.noUnicorn = (this.unicorns.length > 1) ? false : true;

    if (!this.noUnicorn) {
      this.unicornOne = this.unicorns[0];
      this.unicornsLeft = this.unicorns.slice();
      this.unicornsLeft.splice(0, 1);
      this.unicornTwo = this.unicornsLeft[0];
    }
  }
  selectOne(id: number) {
    this.unicornOne = this.unicorns[id];
    this.unicornsLeft = this.unicorns.slice();
    this.unicornsLeft.splice(id, 1);

    if (this.unicornOne.gender === this.unicornTwo.gender) {
      this.unicornTwo = this.unicornsLeft[0];
    }
  }
  selectTwo(id: number) {
    this.unicornTwo = this.unicornsLeft[id];
  }

  mate() {
    this.haveMated = true;
    if (this.unicornOne.gender !== 'O' && this.unicornTwo.gender !== 'O' && this.unicornOne.gender !== this.unicornTwo.gender) {
      if (!this.unicornOne.hasChild && !this.unicornTwo.hasChild) {
        // Child attributes
        const childName = this.unicornOne.name + '-' + this.unicornTwo.name;
        const childAge = 1;
        const childGender = this.randomGender();
        const childColor = this.colorBlender.blend_colors('#' + this.unicornOne.color, '#' + this.unicornTwo.color);
        const childParents = [this.unicornOne, this.unicornTwo];

        this.unicornChild = new Unicorn(childName, childColor, childGender, childAge, childParents);

        // Create the new child from those attributes
        this.unicornService.create(this.unicornChild);

        // Update parents hasChild attribute
        this.unicornService.unicorns[this.unicornOne.id].hasChild = true;
        this.unicornService.unicorns[this.unicornTwo.id].hasChild = true;
        this.unicornService.saveLocalStorage();
      }
    }
  }

  randomGender() {
    const rand = Math.floor(Math.random() * 3);

    switch (rand) {
      case 0:
        return 'M';
      case 1:
        return 'F';
      default:
        return 'O';
    }
  }
}
