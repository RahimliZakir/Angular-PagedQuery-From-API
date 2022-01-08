/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrandsPagedComponent } from './brands-paged.component';

describe('BrandsPagedComponent', () => {
  let component: BrandsPagedComponent;
  let fixture: ComponentFixture<BrandsPagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsPagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsPagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
