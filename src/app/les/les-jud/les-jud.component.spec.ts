import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesJudComponent } from './les-jud.component';

describe('LesJudComponent', () => {
  let component: LesJudComponent;
  let fixture: ComponentFixture<LesJudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesJudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesJudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
