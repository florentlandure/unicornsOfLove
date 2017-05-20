import { Injectable } from '@angular/core';

import { Unicorn } from './models/Unicorn';

@Injectable()
export class UnicornService {
  unicorns: Unicorn[];

  constructor() {

  }

}
