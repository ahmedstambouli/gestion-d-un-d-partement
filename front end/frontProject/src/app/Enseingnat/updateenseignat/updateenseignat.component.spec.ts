import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateenseignatComponent } from './updateenseignat.component';

describe('UpdateenseignatComponent', () => {
  let component: UpdateenseignatComponent;
  let fixture: ComponentFixture<UpdateenseignatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateenseignatComponent]
    });
    fixture = TestBed.createComponent(UpdateenseignatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
