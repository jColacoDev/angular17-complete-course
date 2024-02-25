import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesService } from './courses.service';
import { FilterByCategoryPipe } from './filter-by-category.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseCardComponent,
    FilterByCategoryPipe
  ],
  exports: [
    CourseCardComponent,
    FilterByCategoryPipe
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
