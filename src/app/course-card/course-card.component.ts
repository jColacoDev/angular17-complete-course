import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({required:true}) course: Course;
  @Input({required:true}) index: number;
  
  @Output() courseSelected = new EventEmitter<Course>();


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
