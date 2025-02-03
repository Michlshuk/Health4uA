import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrAddComponent } from './search-or-add.component';

describe('SearchOrAddComponent', () => {
  let component: SearchOrAddComponent;
  let fixture: ComponentFixture<SearchOrAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOrAddComponent]
    });
    fixture = TestBed.createComponent(SearchOrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
