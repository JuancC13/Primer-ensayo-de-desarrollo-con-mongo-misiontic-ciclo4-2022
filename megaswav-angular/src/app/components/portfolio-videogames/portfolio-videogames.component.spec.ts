import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioVideogamesComponent } from './portfolio-videogames.component';

describe('PortfolioVideogamesComponent', () => {
  let component: PortfolioVideogamesComponent;
  let fixture: ComponentFixture<PortfolioVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioVideogamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
