import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch9 } from './overwatch9';

describe('Overwatch9', () => {
  let component: Overwatch9;
  let fixture: ComponentFixture<Overwatch9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch9],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
