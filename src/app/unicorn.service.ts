import { Injectable } from '@angular/core';

import { Unicorn } from './models/Unicorn';

@Injectable()
export class UnicornService {
  unicorns: Unicorn[];

  constructor() {

  }

  create() {

  }

  fetchLocalStorage() {
    const ls = localStorage.getItem('unicorns');
    console.log(ls);
  }

  find(id: number): Unicorn {
    return null;
  }
}
