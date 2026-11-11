import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch5 } from './overwatch5';

describe('Overwatch5', () => {
  let component: Overwatch5;
  let fixture: ComponentFixture<Overwatch5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch5],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
