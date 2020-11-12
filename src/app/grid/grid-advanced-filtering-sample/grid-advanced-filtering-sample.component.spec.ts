import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAdvancedFilteringSampleComponent } from './grid-advanced-filtering-sample.component';

describe('GridAdvancedFilteringSampleComponent', () => {
  let component: GridAdvancedFilteringSampleComponent;
  let fixture: ComponentFixture<GridAdvancedFilteringSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAdvancedFilteringSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAdvancedFilteringSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
