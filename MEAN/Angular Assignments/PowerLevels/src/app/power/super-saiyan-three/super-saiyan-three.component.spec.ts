import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanTHreeComponent } from './super-saiyan-three.component';

describe('SuperSaiyanTHreeComponent', () => {
  let component: SuperSaiyanTHreeComponent;
  let fixture: ComponentFixture<SuperSaiyanTHreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanTHreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanTHreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
