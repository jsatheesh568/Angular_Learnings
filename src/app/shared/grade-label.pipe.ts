import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeLabel',
  standalone: true
})
export class GradeLabelPipe implements PipeTransform {
  transform(grade: string): string {
    switch (grade) {
      case '12': return 'Class 12 (Senior)';
      case '11': return 'Class 11';
      default: return `Class ${grade}`;
    }
  }
}
