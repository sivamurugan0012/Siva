import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3DComponentComponent } from './portfolio3-d-component.component';

describe('Portfolio3DComponentComponent', () => {
  let component: Portfolio3DComponentComponent;
  let fixture: ComponentFixture<Portfolio3DComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio3DComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Portfolio3DComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
