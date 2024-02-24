import { AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from 'src/config';

function coursesServiceProvider(http: HttpClient) : CoursesService {
  return new CoursesService(http);
}
export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [
  //   {
  //     // provide: CoursesService, // avoid the injection token
  //     // useClass: CoursesService,  // avoid provider function
  //     provide: CONFIG_TOKEN, 
  //     // useFactory: ()=> APP_CONFIG,
  //     useValue: APP_CONFIG
  //   }
  // ]
})
export class AppComponent implements AfterViewInit, OnInit {
  // readonly COURSES: typeof COURSES = COURSES;
  // courses = [...COURSES];
  courses$ : Observable<Course[]>
  courses;
  startDate = new Date(2000, 0, 1);
  title = "This is a Yellow World";
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

  constructor(
    // @Inject(COURSES_SERVICE) private coursesService: CoursesService
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ){
    // console.log(this.lastCourse);
  }
  ngOnInit(): void {
    this.courses$ = this.coursesService.loadCourses();
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

  save(course: Course){
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log("Saved success")
      );
  }
}
