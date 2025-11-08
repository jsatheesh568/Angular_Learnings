import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;    // required
  grade: string;  // required
 email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private initial: Student[] = [
    { id: 1, name: 'Asha Kumar', age: 18, grade: '12', email: 'asha@example.com' },
    { id: 2, name: 'Ravi Kumar', age: 17, grade: '11', email: 'ravi@example.com' },
    { id: 3, name: 'Priya N', age: 19, grade: '12', email: 'priya@example.com' }
  ];

  private studentsSubject = new BehaviorSubject<Student[]>([...this.initial]);
  students$ = this.studentsSubject.asObservable();

  getStudentsSnapshot() { return this.studentsSubject.getValue(); }

  addStudent(s: Omit<Student, 'id'>) {
    const newStudent: Student = { id: Date.now(), ...s };
    this.studentsSubject.next([newStudent, ...this.getStudentsSnapshot()]);
  }

  removeStudent(id: number) {
    this.studentsSubject.next(this.getStudentsSnapshot().filter(s => s.id !== id));
  }

  getStudentById(id: number) {
    return this.getStudentsSnapshot().find(s => s.id === id);
  }
}
