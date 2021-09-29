import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNavpageComponent } from './student-navpage.component';

describe('StudentNavpageComponent', () => {
  let component: StudentNavpageComponent;
  let fixture: ComponentFixture<StudentNavpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNavpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNavpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
