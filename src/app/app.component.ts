import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

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

  @ViewChild(CourseCardComponent) card: CourseCardComponent;
  @ViewChild('demoRef') demo: ElementRef;
  @ViewChild('lastCourse', {read: ElementRef}) lastCourse: ElementRef;

  onCourseSelected(course: Course){
    console.log("App component click", course);
    console.log(this.card);
    console.log(this.demo);
    console.log(this.lastCourse);
  }

  trackCourse(index: number, course: Course){
    return course.id;
  }
}
