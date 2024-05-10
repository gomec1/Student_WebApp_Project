import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NachrichtenchatComponent } from './nachrichtenchat.component';

describe('NachrichtenchatComponent', () => {
  let component: NachrichtenchatComponent;
  let fixture: ComponentFixture<NachrichtenchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NachrichtenchatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NachrichtenchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
