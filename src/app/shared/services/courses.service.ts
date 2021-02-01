import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';
<<<<<<< HEAD

=======
 
>>>>>>> 03-services-solution
  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId) {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId) {
    return this.http.delete(this.getUrlById(courseId));
  }

<<<<<<< HEAD
  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
=======
  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlById(id) {
    return `${this.getUrl()}/${id}`
>>>>>>> 03-services-solution
  }
}
