import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDigitalBusinessCardsComponent } from './portfolio-digital-business-cards.component';

describe('PortfolioDigitalBusinessCardsComponent', () => {
  let component: PortfolioDigitalBusinessCardsComponent;
  let fixture: ComponentFixture<PortfolioDigitalBusinessCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDigitalBusinessCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDigitalBusinessCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
