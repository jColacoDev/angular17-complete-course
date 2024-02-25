import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { map } from 'rxjs/operators';

@Injectable(
  // {
  // providedIn: 'root',
  // useClass: CoursesService
  // useFactory: (http)=> new CoursesService(http),
  // deps: [HttpClient]
// }
)
export class CoursesService implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log("CoursesService created ...")
  }
  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10");
    // this.http.get('/api/courses', {params}).subscribe(
    //   (data: any) => this.courses = data.payload
    // );
    return this.http.get<any>('/api/courses', {params}).pipe(
      map(res => res.payload)
    );
  }

  saveCourse(course: Course){
    const headers = new HttpHeaders()
      .set("X-Auth", "userId");

    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
