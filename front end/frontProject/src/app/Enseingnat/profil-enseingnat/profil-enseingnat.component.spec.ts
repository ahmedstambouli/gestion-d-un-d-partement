import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEnseingnatComponent } from './profil-enseingnat.component';

describe('ProfilEnseingnatComponent', () => {
  let component: ProfilEnseingnatComponent;
  let fixture: ComponentFixture<ProfilEnseingnatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilEnseingnatComponent]
    });
    fixture = TestBed.createComponent(ProfilEnseingnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
