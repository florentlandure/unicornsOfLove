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
  hasParents: boolean;
  parents: Unicorn[] = [];

  constructor(private activatedRoute: ActivatedRoute, private unicornService: UnicornService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // Get the informations of the current unicorn
      this.unicorn = this.unicornService.unicorns[params.id];
      console.log(this.unicorn);
      // Get the informations of its parents
      this.hasParents = (this.unicorn.parents.length > 0);
      this.parents = this.unicorn.parents;
    });
  }
}
