import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrl: './course-title.component.css'
})
export class CourseTitleComponent {

  @Input() title: string;

}
