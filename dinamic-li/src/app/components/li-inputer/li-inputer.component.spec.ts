import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiInputerComponent } from './li-inputer.component';

describe('LiInputerComponent', () => {
  let component: LiInputerComponent;
  let fixture: ComponentFixture<LiInputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiInputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiInputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
