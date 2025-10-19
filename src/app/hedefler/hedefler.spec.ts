import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hedefler } from './hedefler';

describe('Hedefler', () => {
  let component: Hedefler;
  let fixture: ComponentFixture<Hedefler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hedefler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hedefler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
