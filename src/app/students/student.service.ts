import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;    // required
  grade: string;  // required
 email?: string;
 createdAt: Date; 
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private initial: Student[] = [
  { id: 1, name: 'Asha Kumar', age: 18, grade: '12', email: 'asha@example.com', createdAt: new Date('2024-06-01') },
  { id: 2, name: 'Ravi Kumar', age: 17, grade: '11', email: 'ravi@example.com', createdAt: new Date('2024-08-10') },
  { id: 3, name: 'Priya N', age: 19, grade: '12', email: 'priya@example.com', createdAt: new Date('2024-09-02') }
];


  private studentsSubject = new BehaviorSubject<Student[]>([...this.initial]);
  students$ = this.studentsSubject.asObservable();

  getStudentsSnapshot() { return this.studentsSubject.getValue(); }

 addStudent(s: Omit<Student, 'id' | 'createdAt'>) {
  const newStudent: Student = {
    id: Date.now(),
    createdAt: new Date(),     // <-- auto set
    ...s
  };
  this.studentsSubject.next([newStudent, ...this.getStudentsSnapshot()]);
}

  removeStudent(id: number) {
    this.studentsSubject.next(this.getStudentsSnapshot().filter(s => s.id !== id));
  }

  getStudentById(id: number) {
    return this.getStudentsSnapshot().find(s => s.id === id);
  }
}
