
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../student.service';
import { StudentItem } from '../student-item/student-item';
import { RouterModule } from '@angular/router';
import { Observable, combineLatest, BehaviorSubject, map } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, StudentItem],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'],
})
export class StudentList {
  students$: Observable<Student[]>;
  private search$ = new BehaviorSubject<string>('');
  filtered$: Observable<Student[]>;
  searchTerm = '';                      // <-- add this

  constructor(private studentService: StudentService) {
    this.students$ = this.studentService.students$;
    this.filtered$ = combineLatest([this.students$, this.search$]).pipe(
      map(([list, term]) => {
        const q = term.trim().toLowerCase();
        if (!q) return list;
        return list.filter(s =>
          [s.name, s.grade, s.email ?? ''].some(v => (v ?? '').toLowerCase().includes(q))
        );
      })
    );
  }

  onSearch(term: string) { this.search$.next(term); }

  remove(id: number) {
    if (confirm('Remove this student?')) this.studentService.removeStudent(id);
  }
}
