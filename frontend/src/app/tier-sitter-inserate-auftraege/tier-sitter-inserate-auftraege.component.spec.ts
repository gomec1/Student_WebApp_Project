import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierSitterInserateAuftraegeComponent } from './tier-sitter-inserate-auftraege.component';

describe('TierSitterInserateAuftraegeComponent', () => {
  let component: TierSitterInserateAuftraegeComponent;
  let fixture: ComponentFixture<TierSitterInserateAuftraegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierSitterInserateAuftraegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TierSitterInserateAuftraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
