import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // readonly COURSES: typeof COURSES = COURSES;
  courses = [...COURSES];
  startDate = new Date(2000, 0, 1);
  title = this.courses[1].description;
  price = 9.999545845;
  rate = 0.67;

  @ViewChild(CourseCardComponent)
    card: CourseCardComponent;
  @ViewChild('demoRef')
    demo: ElementRef;
  @ViewChild('lastCourse', {read: ElementRef})
    lastCourse: ElementRef;
  // @ViewChildren(CourseCardComponent)
  //  cards: QueryList<CourseCardComponent>;
  @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<ElementRef>;

  @ViewChild(CourseCardComponent, {read: HighlightedDirective})
    highlighted2: HighlightedDirective
  @ViewChild(HighlightedDirective)
    highlighted: HighlightedDirective;

  constructor(){
    // console.log(this.lastCourse);
  }
  
  ngAfterViewInit(){
    // console.log(this.lastCourse);
    // console.log(this.cards.last);
    // this.cards.changes.subscribe(cards=> console.log(cards));

    console.log(this.highlighted);
    console.log(this.highlighted2);
  }

  onCourseSelected(course: Course){
    // console.log("App component click", course);
    // console.log(this.card);
    // console.log(this.demo);
    // console.log(this.lastCourse);
  }

  trackCourse(index: number, course: Course){
    return course.id;
  }

  onCoursesEdited(){
    this.courses.unshift(COURSES[5]);
    // console.log(this.courses);
    // console.log(this.cards);
  }

  onToggle(isHighLighted: boolean){
    console.log(isHighLighted);
  }
}
