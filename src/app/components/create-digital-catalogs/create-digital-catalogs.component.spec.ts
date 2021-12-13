import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDigitalCatalogsComponent } from './create-digital-catalogs.component';

describe('CreateDigitalCatalogsComponent', () => {
  let component: CreateDigitalCatalogsComponent;
  let fixture: ComponentFixture<CreateDigitalCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDigitalCatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDigitalCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
