// src/app/students/student-detail/student-detail.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.css'],
})
export class StudentDetail implements OnInit {
  student?: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getStudentById(id);
    if (!this.student) {
      this.router.navigate(['/students']);
    }
  }
}
