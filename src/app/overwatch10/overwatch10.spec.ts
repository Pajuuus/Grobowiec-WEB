import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch10 } from './overwatch10';

describe('Overwatch10', () => {
  let component: Overwatch10;
  let fixture: ComponentFixture<Overwatch10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch10],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
