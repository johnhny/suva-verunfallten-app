import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FussballtestPage } from './fussballtest.page';

describe('FussballtestPage', () => {
  let component: FussballtestPage;
  let fixture: ComponentFixture<FussballtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FussballtestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FussballtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
