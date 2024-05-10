import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierSitterInseratAuftraegeDetailsComponent } from './tier-sitter-inserat-auftraege-details.component';

describe('TierSitterInseratAuftraegeDetailsComponent', () => {
  let component: TierSitterInseratAuftraegeDetailsComponent;
  let fixture: ComponentFixture<TierSitterInseratAuftraegeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierSitterInseratAuftraegeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TierSitterInseratAuftraegeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
