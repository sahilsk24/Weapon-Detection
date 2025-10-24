import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectComponent } from './detect.component';

describe('DetectComponent', () => {
  let component: DetectComponent;
  let fixture: ComponentFixture<DetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
