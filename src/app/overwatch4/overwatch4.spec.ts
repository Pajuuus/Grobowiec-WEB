import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch4 } from './overwatch4';

describe('Overwatch4', () => {
  let component: Overwatch4;
  let fixture: ComponentFixture<Overwatch4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch4],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
