import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 03-services-solution

import { CourseDetailsComponent } from './course-details.component';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [FormsModule],
=======
>>>>>>> 03-services-solution
      declarations: [ CourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
    component.selectedCourse = {};
=======
>>>>>>> 03-services-solution
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
