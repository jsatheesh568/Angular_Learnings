// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { StudentList } from './students/student-list/student-list';
import { StudentDetail } from './students/student-detail/student-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentList },
  { path: 'students/:id', component: StudentDetail },
  { path: '**', redirectTo: 'students' }
];
