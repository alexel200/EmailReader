import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTraceCardComponent } from './log-trace-card.component';

describe('LogTraceCardComponent', () => {
  let component: LogTraceCardComponent;
  let fixture: ComponentFixture<LogTraceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogTraceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTraceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
