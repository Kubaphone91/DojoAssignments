import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotingComponent } from './quoting.component';

describe('QuotingComponent', () => {
  let component: QuotingComponent;
  let fixture: ComponentFixture<QuotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
