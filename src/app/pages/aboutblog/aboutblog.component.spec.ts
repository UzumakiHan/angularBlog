import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutblogComponent } from './aboutblog.component';

describe('AboutblogComponent', () => {
  let component: AboutblogComponent;
  let fixture: ComponentFixture<AboutblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
