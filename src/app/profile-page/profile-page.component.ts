import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Unicorn } from 'app/models/Unicorn';
import { UnicornService } from 'app/unicorn.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  unicorn: Unicorn;

  constructor(private activatedRoute: ActivatedRoute, private unicornService: UnicornService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.unicorn = this.unicornService.unicorns[params.id];
    });
  }

}
