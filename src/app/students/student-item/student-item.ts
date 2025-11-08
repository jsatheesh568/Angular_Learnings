// src/app/students/student-item/student-item.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.service';   // <-- important: import from student.service
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student-item.html',
  styleUrls: ['./student-item.css'],
})
export class StudentItem {
  @Input() student!: Student;
  @Output() remove = new EventEmitter<number>();
}
