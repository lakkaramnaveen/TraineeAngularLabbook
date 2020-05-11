import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtraineeComponent } from './searchtrainee.component';

describe('SearchtraineeComponent', () => {
  let component: SearchtraineeComponent;
  let fixture: ComponentFixture<SearchtraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
