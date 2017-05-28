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
    this.saveLocalStorage();
  }

  delete(id: number) {
    this.unicorns.splice(id, 1);
    this.saveLocalStorage();
  }

  // Returns males and females only
  getMatableUnicorns() {
    const arr: Unicorn[] = [];
    this.unicorns.forEach(u => {
      if (u.gender.toLowerCase() !== 'o' && u.age >= 9 && !u.hasChild) {
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
        const tmpUni = new Unicorn(u.name, u.color, u.gender, u.age, u.parents, u.hasChild);
        tmpUni.id = u.id;
        unis.push(tmpUni);
      });
    }
    return unis;
  }

  // Store unicorns locally
  saveLocalStorage() {
    const storage = [];

    this.unicorns.forEach((u, key) => {
      storage.push({
        id: key,
        name: u.name,
        gender: u.gender,
        color: u.color,
        age: u.age,
        parents: u.parents,
        hasChild: u.hasChild
      });
    });

    localStorage.setItem('unicorns', JSON.stringify(storage));
  }
}
