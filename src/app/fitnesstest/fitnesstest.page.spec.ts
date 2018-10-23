import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesstestPage } from './fitnesstest.page';

describe('FitnesstestPage', () => {
  let component: FitnesstestPage;
  let fixture: ComponentFixture<FitnesstestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnesstestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnesstestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
