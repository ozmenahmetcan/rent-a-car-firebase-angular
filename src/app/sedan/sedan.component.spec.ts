/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SedanComponent } from './sedan.component';

describe('SedanComponent', () => {
  let component: SedanComponent;
  let fixture: ComponentFixture<SedanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
