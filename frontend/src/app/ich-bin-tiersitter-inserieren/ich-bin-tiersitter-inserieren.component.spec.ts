import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchBinTiersitterInserierenComponent } from './ich-bin-tiersitter-inserieren.component';

describe('IchBinTiersitterInserierenComponent', () => {
  let component: IchBinTiersitterInserierenComponent;
  let fixture: ComponentFixture<IchBinTiersitterInserierenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IchBinTiersitterInserierenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IchBinTiersitterInserierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
