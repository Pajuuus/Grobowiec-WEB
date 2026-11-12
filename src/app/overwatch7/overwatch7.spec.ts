import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch7 } from './overwatch7';

describe('Overwatch7', () => {
  let component: Overwatch7;
  let fixture: ComponentFixture<Overwatch7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch7],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
