import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Complete remote update call
  // STEP 02: Complete remote delete call
  // STEP 03: Fix UI on completed operation

  selectedCourse = null;

  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.resetSelectedCourse();
    this.loadCourses();
=======
    this.refreshCourses();
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
>>>>>>> 03-services-solution
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  saveCourse(course) {
    if(course.id) {
      this.coursesService.update(course)
        .subscribe(result => this.refreshCourses());
    } else {
      this.coursesService.create(course)
        .subscribe(result => this.refreshCourses());
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
<<<<<<< HEAD
      .subscribe(result => this.refreshCourses());
=======
    .subscribe(result => this.refreshCourses());
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
>>>>>>> 03-services-solution
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
