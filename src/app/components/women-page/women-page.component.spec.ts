import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPageComponent } from './women-page.component';

describe('WomenPageComponent', () => {
  let component: WomenPageComponent;
  let fixture: ComponentFixture<WomenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
