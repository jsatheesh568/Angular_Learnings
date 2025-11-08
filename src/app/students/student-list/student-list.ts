// src/app/students/student-list/student-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../student.service';
import { StudentItem } from '../student-item/student-item';
import { AddStudent } from '../add-student/add-student';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule, StudentItem, AddStudent],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'],
})
export class StudentList {
  students$: Observable<Student[]>;

  constructor(private studentService: StudentService) {
    this.students$ = this.studentService.students$;
  }

  remove(id: number) {
    if (confirm('Remove this student?')) {
      this.studentService.removeStudent(id);
    }
  }
}
