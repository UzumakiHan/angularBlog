import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebexampleComponent } from './webexample.component';

describe('WebexampleComponent', () => {
  let component: WebexampleComponent;
  let fixture: ComponentFixture<WebexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
