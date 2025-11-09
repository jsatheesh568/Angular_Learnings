import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Student } from '../student.service';
import { HoverHighlightDirective } from '../../shared/hover-highlight.directive';
import { GradeLabelPipe } from '../../shared/grade-label.pipe';
import { CardComponent } from '../../shared/card';

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [RouterModule, HoverHighlightDirective, GradeLabelPipe, CardComponent],
  templateUrl: './student-item.html',
  styleUrls: ['./student-item.css'],
})
export class StudentItem {
  @Input() student!: Student;
  @Output() removed = new EventEmitter<number>();

  onDelete() {
    this.removed.emit(this.student.id);
  }
}
