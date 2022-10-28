import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-edit',
  templateUrl: './row-edit.component.html',
  styleUrls: ['./row-edit.component.scss'],
})
export class RowEditComponent implements OnInit {
  @Input() data: any;
  edit: string;
  save: string;
  rowData: any;
  row: any;
  index: number = 0;

  constructor() {}

  agInit(params: any) {
    this.rowData = params;
    this.edit = 'Edit';
    this.save = 'Save';
  }

  editRow(rowData: any) {
    // console.log(this.rowData);
    this.rowData.context.componentParent.edit(rowData);
  }

  deleteRow(index: number) {
    // console.log(this.data);
    // console.log(index);
    
    this.rowData.context.componentParent.delete(index);
  }

  ngOnInit(): void {
    this.data;
  }
}
