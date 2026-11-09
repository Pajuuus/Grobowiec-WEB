import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overwatch3 } from './overwatch3';

describe('Overwatch3', () => {
  let component: Overwatch3;
  let fixture: ComponentFixture<Overwatch3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overwatch3],
    }).compileComponents();

    fixture = TestBed.createComponent(Overwatch3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
