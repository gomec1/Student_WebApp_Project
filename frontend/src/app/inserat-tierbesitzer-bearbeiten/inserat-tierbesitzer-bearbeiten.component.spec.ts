import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseratTierbesitzerBearbeitenComponent } from './inserat-tierbesitzer-bearbeiten.component';

describe('InseratTierbesitzerBearbeitenComponent', () => {
  let component: InseratTierbesitzerBearbeitenComponent;
  let fixture: ComponentFixture<InseratTierbesitzerBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InseratTierbesitzerBearbeitenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InseratTierbesitzerBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
