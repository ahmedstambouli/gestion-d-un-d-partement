import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnseingnatComponent } from './home-enseingnat.component';

describe('HomeEnseingnatComponent', () => {
  let component: HomeEnseingnatComponent;
  let fixture: ComponentFixture<HomeEnseingnatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEnseingnatComponent]
    });
    fixture = TestBed.createComponent(HomeEnseingnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
