import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proje } from './proje';

describe('Proje', () => {
  let component: Proje;
  let fixture: ComponentFixture<Proje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
