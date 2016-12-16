/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PickleJarComponent } from './pickle-jar.component';

describe('PickleJarComponent', () => {
  let component: PickleJarComponent;
  let fixture: ComponentFixture<PickleJarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickleJarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickleJarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
