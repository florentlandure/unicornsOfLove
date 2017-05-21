import { Component, OnInit } from '@angular/core';
import { UnicornService } from '../unicorn.service';
import { Unicorn } from '../models/Unicorn';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  unicorns: Unicorn[];

  constructor(private unicornService: UnicornService) { }

  ngOnInit() {
    this.unicorns = this.unicornService.unicorns;
  }

}
