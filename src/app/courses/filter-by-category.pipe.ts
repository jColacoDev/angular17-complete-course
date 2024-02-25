import { Pipe } from "@angular/core";
import { Course } from "../model/course";

@Pipe({
    name: 'filterByCategory'
})
export class FilterByCategoryPipe {
    transform(courses: Course[], category: string){
        return courses.filter(course => course.category === category);
    }
}