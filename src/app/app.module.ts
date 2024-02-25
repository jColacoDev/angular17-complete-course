import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxUnlessDirective,
    CourseTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HighlightedDirective,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
