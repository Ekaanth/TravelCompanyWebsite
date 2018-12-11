import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSikkimComponent } from './explore-sikkim.component';

describe('ExploreSikkimComponent', () => {
  let component: ExploreSikkimComponent;
  let fixture: ComponentFixture<ExploreSikkimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreSikkimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSikkimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
