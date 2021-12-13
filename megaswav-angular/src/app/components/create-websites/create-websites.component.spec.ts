import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWebsitesComponent } from './create-websites.component';

describe('CreateWebsitesComponent', () => {
  let component: CreateWebsitesComponent;
  let fixture: ComponentFixture<CreateWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
