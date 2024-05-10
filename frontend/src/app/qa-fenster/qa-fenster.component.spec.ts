import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaFensterComponent } from './qa-fenster.component';

describe('QaFensterComponent', () => {
  let component: QaFensterComponent;
  let fixture: ComponentFixture<QaFensterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaFensterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QaFensterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
