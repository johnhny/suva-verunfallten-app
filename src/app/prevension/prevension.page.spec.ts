import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevensionPage } from './prevension.page';

describe('PrevensionPage', () => {
  let component: PrevensionPage;
  let fixture: ComponentFixture<PrevensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrevensionPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
