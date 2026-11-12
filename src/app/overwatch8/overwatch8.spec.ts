import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch8 } from './overwatch8';

describe('Overwatch8', () => {
  let component: Overwatch8;
  let fixture: ComponentFixture<Overwatch8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch8],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
