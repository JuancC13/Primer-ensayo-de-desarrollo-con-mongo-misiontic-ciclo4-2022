import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDigitalBusinessCardsComponent } from './create-digital-business-cards.component';

describe('CreateDigitalBusinessCardsComponent', () => {
  let component: CreateDigitalBusinessCardsComponent;
  let fixture: ComponentFixture<CreateDigitalBusinessCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDigitalBusinessCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDigitalBusinessCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
