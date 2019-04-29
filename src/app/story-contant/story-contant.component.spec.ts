import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryContantComponent } from './story-contant.component';

describe('StoryContantComponent', () => {
  let component: StoryContantComponent;
  let fixture: ComponentFixture<StoryContantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryContantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
