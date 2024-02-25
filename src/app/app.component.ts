import { AfterViewInit, Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { CoursesService } from './courses/courses.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from 'src/config';
import { map } from 'rxjs/operators';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';

function coursesServiceProvider(http: HttpClient) : CoursesService {
  return new CoursesService(http);
}
export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
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
export class AppComponent implements AfterViewInit, OnInit, DoCheck {
  // readonly COURSES: typeof COURSES = COURSES;
  // courses = [...COURSES];
  courses$ : Observable<Course[]>
  courses;
  startDate = new Date(2000, 0, 1);
  title = "This is a Yellow World";
  price = 9.999545845;
  rate = 0.67;
  loaded = true;
  coursesTotal = 0;

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
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    @Attribute('type') private type: string, //one time binding input
    private cd: ChangeDetectorRef,
    private injector: Injector
  ){
    // console.log(this.lastCourse);
  }
  ngDoCheck(): void { 
    if(this.loaded){
      this.cd.markForCheck();
      this.loaded = false;
    }
  }

  ngOnInit(): void {
    // Angular custom Component for widgets with browser 
    const htmlElement = createCustomElement(CourseTitleComponent, {injector: this.injector});
    customElements.define('course-title', htmlElement);


    this.courses$ = this.coursesService.loadCourses();
    this.courses$.pipe(
      map(courses=> courses.length)
    ).subscribe(length=>{
      this.coursesTotal = length;
    })

    this.loaded = true;
    // this.coursesService.loadCourses().subscribe(courses=>{
    //   this.courses = courses;
    //   this.cd.markForCheck(); 
    // })
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
    this.courses.unshift(COURSES[0]);
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
