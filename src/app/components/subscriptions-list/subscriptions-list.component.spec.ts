import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsListComponent } from './subscriptions-list.component';

describe('SubscriptionsListComponent', () => {
  let component: SubscriptionsListComponent;
  let fixture: ComponentFixture<SubscriptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
