import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // readonly COURSES: typeof COURSES = COURSES;
  courses = [...COURSES];
  startDate = new Date(2000, 0, 1);
  title = this.courses[1].description;
  price = 9.999545845;
  rate = 0.67;

  onCourseSelected(course: Course){
    console.log("App component click", course);
  }

  trackCourse(index: number, course: Course){
    return course.id;
  }
}
