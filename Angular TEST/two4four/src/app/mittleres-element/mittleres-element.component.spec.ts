import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MittleresElementComponent } from './mittleres-element.component';

describe('MittleresElementComponent', () => {
  let component: MittleresElementComponent;
  let fixture: ComponentFixture<MittleresElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MittleresElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MittleresElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
