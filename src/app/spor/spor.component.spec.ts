/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SporComponent } from './spor.component';

describe('SporComponent', () => {
  let component: SporComponent;
  let fixture: ComponentFixture<SporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SporComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
