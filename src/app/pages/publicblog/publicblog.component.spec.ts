import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicblogComponent } from './publicblog.component';

describe('PublicblogComponent', () => {
  let component: PublicblogComponent;
  let fixture: ComponentFixture<PublicblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
