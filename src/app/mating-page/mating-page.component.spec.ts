import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatingPageComponent } from './mating-page.component';

describe('MatingPageComponent', () => {
  let component: MatingPageComponent;
  let fixture: ComponentFixture<MatingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
