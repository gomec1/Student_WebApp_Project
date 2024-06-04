import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseratTiersitterBearbeitenComponent } from './inserat-tiersitter-bearbeiten.component';

describe('InseratTiersitterBearbeitenComponent', () => {
  let component: InseratTiersitterBearbeitenComponent;
  let fixture: ComponentFixture<InseratTiersitterBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InseratTiersitterBearbeitenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InseratTiersitterBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
