import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesComponentComponent } from './medicines-component.component';

describe('MedicinesComponentComponent', () => {
  let component: MedicinesComponentComponent;
  let fixture: ComponentFixture<MedicinesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinesComponentComponent]
    });
    fixture = TestBed.createComponent(MedicinesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
