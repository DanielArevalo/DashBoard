import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMakeComponent } from './about-make.component';

describe('AboutMakeComponent', () => {
  let component: AboutMakeComponent;
  let fixture: ComponentFixture<AboutMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
