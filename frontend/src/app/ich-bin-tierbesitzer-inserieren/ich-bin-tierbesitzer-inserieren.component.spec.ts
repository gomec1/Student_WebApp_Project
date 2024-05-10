import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchBinTierbesitzerInserierenComponent } from './ich-bin-tierbesitzer-inserieren.component';

describe('IchBinTierbesitzerInserierenComponent', () => {
  let component: IchBinTierbesitzerInserierenComponent;
  let fixture: ComponentFixture<IchBinTierbesitzerInserierenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IchBinTierbesitzerInserierenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IchBinTierbesitzerInserierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
