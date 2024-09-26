import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormPageComponent } from './email-form-page.component';

describe('EmailFormPageComponent', () => {
  let component: EmailFormPageComponent;
  let fixture: ComponentFixture<EmailFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
