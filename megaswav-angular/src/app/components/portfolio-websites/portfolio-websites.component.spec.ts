import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWebsitesComponent } from './portfolio-websites.component';

describe('PortfolioWebsitesComponent', () => {
  let component: PortfolioWebsitesComponent;
  let fixture: ComponentFixture<PortfolioWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
