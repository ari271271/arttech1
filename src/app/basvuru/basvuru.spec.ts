import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basvuru } from './basvuru';

describe('Basvuru', () => {
  let component: Basvuru;
  let fixture: ComponentFixture<Basvuru>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basvuru]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basvuru);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
