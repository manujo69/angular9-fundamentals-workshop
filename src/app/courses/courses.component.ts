import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Update the form to show percentComplete
  // STEP 02: Updaet the form to show favorite

  selectedCourse = null;

  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.refreshCourses();
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
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
    .subscribe(result => this.refreshCourses());
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
