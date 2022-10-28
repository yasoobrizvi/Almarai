import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Fine {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  fines: Fine[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'type1', viewValue: 'Type-1' },
    { value: 'type2', viewValue: 'Type-2' },
    { value: 'type3', viewValue: 'Type-3' },
    { value: 'type4', viewValue: 'Type-4' },
  ];
  rowData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  fineForm: FormGroup = this.fb.group({
    type: ['', [Validators.required]],
    englishName: ['', [Validators.required]],
    arabicName: ['', [Validators.required]],
  });

  onSubmit(rowData: any) {
    if (this.fineForm.valid) {
     console.log(rowData);
    }
  }
}
