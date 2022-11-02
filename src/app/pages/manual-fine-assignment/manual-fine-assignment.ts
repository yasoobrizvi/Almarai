import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface Employees {
  value: string;
  name: string;
}

interface ViolationType {
  value: string;
  name: string;
}

@Component({
  selector: "app-employee-data",
  templateUrl: "./manual-fine-assignment.html",
  styleUrls: ["./manual-fine-assignment.scss"],
})
export class ManualFineAssignmentComponent implements OnInit {
  plateNumber: string;
  selectedEmployee: string;
  selectedViolationType: string;
  amount: number;

  employees: Employees[] = [
    { value: "one", name: "One" },
    { value: "two", name: "Two" },
    { value: "three", name: "Three" },
    { value: "four", name: "Four" },
    { value: "five", name: "Five" },
  ];

  violation: ViolationType[] = [
    { value: "one", name: "Type-1" },
    { value: "two", name: "Type-2" },
    { value: "three", name: "Type-3" },
    { value: "four", name: "Type-4" },
    { value: "five", name: "Type-5" },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  manualFineForm: FormGroup = this.formBuilder.group({
    plateNumber: [""],
    employee: [""],
    violationType: [""],
    amount: [""],
  });

  getEmployeeData() {
    console.log(this.selectedEmployee);
  }

  getViolationData() {
    console.log(this.selectedViolationType);
  }

  onSubmit() {
    console.log(this.plateNumber);
  }
}
