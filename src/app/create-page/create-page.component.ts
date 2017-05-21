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

  constructor(private unicornService: UnicornService, private router: Router) { }

  ngOnInit() {
    //localStorage.setItem('unicorns', JSON.stringify([]));
    console.log(this.unicornService.fetchLocalStorage());
  }

  onSubmit() {
    if (this.name.trim() !== '' && this.color.trim() !== '' && this.gender.trim() && this.age >= 0) {
      // Store new unicorn locally
      this.color = this.color.replace('#', '');
      this.unicornService.create(new Unicorn(this.name, this.color, this.gender, this.age));

      // Reset input data
      this.name = '';
      this.color = '';
      this.gender = '';
      this.age = 0;

      // Redirect to home page
      this.router.navigateByUrl('/');
    }
  }

}
