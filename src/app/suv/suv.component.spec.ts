/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuvComponent } from './suv.component';

describe('SuvComponent', () => {
  let component: SuvComponent;
  let fixture: ComponentFixture<SuvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
