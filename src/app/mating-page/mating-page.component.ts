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
  unicornOneSelected = false; // Is unicorn one selected ?
  noUnicorn: boolean; // Is the array of unicorns empty ?
  colorBlender: ColorBlender = new ColorBlender();

  constructor(private unicornService: UnicornService, private router: Router) { }

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
    this.unicornTwo = this.unicornsLeft[0];

    if (this.unicornOne.gender === this.unicornTwo.gender) {
      this.unicornTwo = this.unicornsLeft[0];
    }
  }
  selectTwo(id: number) {
    this.unicornTwo = this.unicornsLeft[id];
  }

  mate() {
    // Child attributes
    const childName = this.unicornOne.name + '-' + this.unicornTwo.name;
    const childAge = 1;
    const childGender = this.randomGender();
    const childColor = this.colorBlender.blend_colors('#' + this.unicornOne.color, '#' + this.unicornTwo.color);
    const childParents = [this.unicornOne, this.unicornTwo];

    // Create the new child from those attributes
    this.unicornService.create(new Unicorn(childName, childColor, childGender, childAge, childParents));

    // Update parents hasChild attribute
    this.unicornService.unicorns[this.unicornOne.id].hasChild = true;
    this.unicornService.unicorns[this.unicornTwo.id].hasChild = true;
    this.unicornService.saveLocalStorage();

    // Redirect to home page
    this.router.navigateByUrl('/');
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
