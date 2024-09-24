import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFilterBarComponent } from './email-filter-bar.component';

describe('EmailFilterBarComponent', () => {
  let component: EmailFilterBarComponent;
  let fixture: ComponentFixture<EmailFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailFilterBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
