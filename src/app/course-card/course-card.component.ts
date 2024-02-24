import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { COURSES_SERVICE } from '../app.component';


@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterContentInit{
  @Input({required:true}) course: Course;
  @Input({required:true}) index: number;
  @Input()warnTpl: TemplateRef<any>;
  @Output('courseChanged') courseEmitter = new EventEmitter<Course>();

  @ContentChild('courseSelection2', {read: ElementRef}) courseSelection2;
  @ContentChildren('courseSelection2', {read: ElementRef}) courseSelections2: QueryList<ElementRef>;

  constructor(
    private coursesService: CoursesService
  ){ }
  ngAfterContentInit(): void {
    this.courseSelection2 && console.log(this.courseSelection2);
    this.courseSelections2.length > 0 && console.log(this.courseSelections2);
  }

  onSaveClicked(description: string){
    this.courseEmitter.emit({...this.course, description});
  }

  cardClasses(){
    return this.course.category === "BEGINNER" && "beginner"
    return {
      'beginner': this.course.category === "BEGINNER",
    };
  };

  cardStyles(){
    return {
      'text-decoration': 'underline',
    }
  };

  onTitleChanged(title: string){
    this.course.description= title;
  }
}
