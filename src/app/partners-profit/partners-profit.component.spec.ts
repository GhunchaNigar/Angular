import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersProfitComponent } from './partners-profit.component';

describe('PartnersProfitComponent', () => {
  let component: PartnersProfitComponent;
  let fixture: ComponentFixture<PartnersProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersProfitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnersProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
