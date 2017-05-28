import { Injectable } from '@angular/core';

import { Unicorn } from './models/Unicorn';

@Injectable()
export class UnicornService {
  unicorns: Unicorn[];

  constructor() {
    this.unicorns = this.fetchLocalStorage();
  }

  create(unicorn: Unicorn) {
    this.unicorns.push(unicorn);
    this.saveLocalStorage(this.unicorns);
  }

  delete(id: number) {
    this.unicorns.splice(id, 1);
    this.saveLocalStorage(this.unicorns);
  }

  // Returns males and females only
  getMatableUnicorns() {
    const arr: Unicorn[] = [];
    this.unicorns.forEach(u => {
      if (u.gender.toLowerCase() !== 'o' && u.age >= 9) {
        arr.push(u);
      }
    });

    return arr;
  }

  // Return an array of the opposite gender of unicorn (for mating)
  getOppositeGender(uni: Unicorn) {
    const arr: Unicorn[] = [];
    this.getMatableUnicorns().forEach(u => {
      if (u.gender.toLowerCase() !== 'o' && u.gender.toLowerCase() !== uni.gender.toLowerCase()) {
        arr.push(u);
      }
    });

    return arr;
  }

  fetchLocalStorage(): Unicorn[] {
    // Check if unicorns are already stored locally
    const ls = localStorage.getItem('unicorns');
    const unis: Unicorn[] = [];

    if (ls !== null && ls.length > 0) {
      JSON.parse(ls).forEach(u => {
        unis.push(new Unicorn(u.name, u.color, u.gender, u.age, u.parents));
      });
    }
    return unis;
  }

  // Store unicorns locally
  saveLocalStorage(unicorns: Unicorn[]) {
    const storage = [];

    unicorns.forEach((u, key) => {
      storage.push({
        id: key,
        name: u.name,
        gender: u.gender,
        color: u.color,
        age: u.age,
        parents: u.parents
      });
    });

    localStorage.setItem('unicorns', JSON.stringify(storage));
  }
}
