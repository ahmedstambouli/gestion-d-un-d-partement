import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEnseingnatComponent } from './navbar-enseingnat.component';

describe('NavbarEnseingnatComponent', () => {
  let component: NavbarEnseingnatComponent;
  let fixture: ComponentFixture<NavbarEnseingnatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarEnseingnatComponent]
    });
    fixture = TestBed.createComponent(NavbarEnseingnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
