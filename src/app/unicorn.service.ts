import { Injectable } from '@angular/core';

import { Unicorn } from './models/Unicorn';

@Injectable()
export class UnicornService {
  unicorns: Unicorn[];

  constructor() {
    this.unicorns = [];
  }

  create(unicorn: Unicorn) {
    this.unicorns.push(unicorn);
    this.saveLocalStorage(this.unicorns);
  }

  fetchLocalStorage(): Unicorn[] {
    // Check if unicorns are already stored locally
    const ls = localStorage.getItem('unicorns');

    if (ls !== null) {
      const arr: Unicorn[] = JSON.parse(ls);

      arr.forEach(u => {
        this.unicorns.push(new Unicorn(u.name, u.color, u.gender, u.age));
      });
    }
    return this.unicorns;
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
        age: u.age
      });
    });

    localStorage.setItem('unicorns', JSON.stringify(storage));
  }
}
