import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';


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
  @Output() courseSelected = new EventEmitter<Course>();

  @ContentChild('courseSelection2', {read: ElementRef}) courseSelection2;
  @ContentChildren('courseSelection2', {read: ElementRef}) courseSelections2: QueryList<ElementRef>;


  ngAfterContentInit(): void {
    this.courseSelection2 && console.log(this.courseSelection2);
    this.courseSelections2.length > 0 && console.log(this.courseSelections2);
  }

  onCourseViewed(){
    console.log("card component - button clicked");
    this.courseSelected.emit(this.course);
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
}
