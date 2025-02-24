import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name: string = '';
  grade1: number | null = null;
  grade2: number | null = null;
  students: {
    name: string;
    grade1: number;
    grade2: number;
    average: number;
  }[] = [];
  editingIndex: number | null = null;
  showModal: boolean = false;
  deleteIndex: number | null = null;
  studentNameToDelete: string = '';

  calculateAverage() {
    if (this.grade1 === null || this.grade2 === null || this.name.trim() === '')
      return;

    const average = (this.grade1 + this.grade2) / 2;

    if (this.editingIndex !== null) {
      this.students[this.editingIndex] = {
        name: this.name.trim(),
        grade1: this.grade1,
        grade2: this.grade2,
        average,
      };
      this.editingIndex = null;
    } else {
      this.students.push({
        name: this.name.trim(),
        grade1: this.grade1,
        grade2: this.grade2,
        average,
      });
    }

    this.resetForm();
  }

  editStudent(index: number) {
    const student = this.students[index];
    this.name = student.name;
    this.grade1 = student.grade1;
    this.grade2 = student.grade2;
    this.editingIndex = index;
  }

  confirmDelete(index: number) {
    const student = this.students[index];
    this.showModal = true;
    this.deleteIndex = index;
    this.studentNameToDelete = student.name;
  }

  deleteStudent() {
    if (this.deleteIndex !== null) {
      this.students.splice(this.deleteIndex, 1);
      this.deleteIndex = null;
    }
    this.showModal = false;
  }

  cancelDelete() {
    this.showModal = false;
    this.deleteIndex = null;
    this.studentNameToDelete = '';
  }

  resetForm() {
    this.name = '';
    this.grade1 = null;
    this.grade2 = null;
    this.editingIndex = null;
  }
}
