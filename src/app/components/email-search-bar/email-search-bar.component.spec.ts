import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSearchBarComponent } from './email-search-bar.component';

describe('EmailSearchBarComponent', () => {
  let component: EmailSearchBarComponent;
  let fixture: ComponentFixture<EmailSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
