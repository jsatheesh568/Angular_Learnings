// src/app/students/add-student/add-student.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css'],
})
export class AddStudent {
  name = '';
  age: number | null = null;
  grade = '';

  constructor(private studentService: StudentService) {}

  submit() {
    if (!this.name.trim() || !this.age || !this.grade.trim()) return;
    this.studentService.addStudent({ name: this.name.trim(), age: this.age, grade: this.grade.trim() });
    this.name = ''; this.age = null; this.grade = '';
  }
}
