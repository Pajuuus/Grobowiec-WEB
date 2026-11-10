import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch6 } from './overwatch6';

describe('Overwatch6', () => {
  let component: Overwatch6;
  let fixture: ComponentFixture<Overwatch6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch6],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
