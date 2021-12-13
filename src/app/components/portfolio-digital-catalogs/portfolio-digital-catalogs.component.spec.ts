import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDigitalCatalogsComponent } from './portfolio-digital-catalogs.component';

describe('PortfolioDigitalCatalogsComponent', () => {
  let component: PortfolioDigitalCatalogsComponent;
  let fixture: ComponentFixture<PortfolioDigitalCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDigitalCatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDigitalCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
