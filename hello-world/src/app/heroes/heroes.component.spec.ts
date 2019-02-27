import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HoroesComponent', () => {
  let component: HoroesComponent;
  let fixture: ComponentFixture<HoroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
