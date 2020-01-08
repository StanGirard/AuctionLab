/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcheteursComponent } from './acheteurs.component';

describe('AcheteursComponent', () => {
  let component: AcheteursComponent;
  let fixture: ComponentFixture<AcheteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
