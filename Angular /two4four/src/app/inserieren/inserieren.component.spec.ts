import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserierenComponent } from './inserieren.component';

describe('InserierenComponent', () => {
  let component: InserierenComponent;
  let fixture: ComponentFixture<InserierenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserierenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
