import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingServicesComponent } from './writing-services.component';

describe('WritingServicesComponent', () => {
  let component: WritingServicesComponent;
  let fixture: ComponentFixture<WritingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
