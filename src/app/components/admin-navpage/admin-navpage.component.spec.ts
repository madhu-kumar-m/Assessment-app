import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavpageComponent } from './admin-navpage.component';

describe('AdminNavpageComponent', () => {
  let component: AdminNavpageComponent;
  let fixture: ComponentFixture<AdminNavpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
