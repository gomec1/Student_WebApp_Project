import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierSitterInserateComponent } from './tier-sitter-inserate.component';

describe('TierSitterInserateComponent', () => {
  let component: TierSitterInserateComponent;
  let fixture: ComponentFixture<TierSitterInserateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierSitterInserateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TierSitterInserateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
