import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierSitterInseratDetailsComponent } from './tier-sitter-inserat-details.component';

describe('TierSitterInseratDetailsComponent', () => {
  let component: TierSitterInseratDetailsComponent;
  let fixture: ComponentFixture<TierSitterInseratDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierSitterInseratDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TierSitterInseratDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
