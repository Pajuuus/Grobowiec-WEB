import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch11 } from './overwatch11';

describe('Overwatch11', () => {
  let component: Overwatch11;
  let fixture: ComponentFixture<Overwatch11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch11],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
