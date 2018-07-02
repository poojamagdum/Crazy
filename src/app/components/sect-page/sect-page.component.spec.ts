import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectPageComponent } from './sect-page.component';

describe('SectPageComponent', () => {
  let component: SectPageComponent;
  let fixture: ComponentFixture<SectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
