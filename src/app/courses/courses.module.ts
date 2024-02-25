import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesService } from './courses.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseCardComponent
  ],
  exports: [
    CourseCardComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
