import { Component, OnInit } from '@angular/core';
import { UnicornService } from './../unicorn.service';
import { Unicorn } from './../models/Unicorn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  name = '';
  color = '';
  gender = '';
  age = 0;
  error = {
    name: false,
    color: false,
    age: false,
    gender: false
  };

  constructor(private unicornService: UnicornService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    if (this.name.trim() !== '' && this.color.trim() !== '' && this.gender.trim() && this.age >= 1) {
      // Store new unicorn locally
      this.color = this.color.replace('#', '');
      this.unicornService.create(new Unicorn(this.name, this.color, this.gender, this.age));

      // Redirect to home page
      this.router.navigateByUrl('/');
    } else {
      if (this.name.trim() === '') {
        this.error.name = true;
      } else {
        this.error.name = false;
      }
      if (this.color.trim() === '') {
        this.error.color = true;
      } else {
        this.error.color = false;
      }
      if (this.gender.trim() === '') {
        this.error.gender = true;
      } else {
        this.error.gender = false;
      }
      if (this.age < 1) {
        this.error.age = true;
      } else {
        this.error.age = false;
      }
    }
  }

}
