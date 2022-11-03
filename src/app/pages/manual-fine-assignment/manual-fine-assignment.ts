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
  // plateNumber: string;
  // date: string;
  // selectedEmployee: string;
  // selectedViolationType: string;
  // amount: string;
  manualForm : FormGroup;
  submitted = false;

  employees: Employees[] = [
    { value: "", name: "Select Employee" },
    { value: "one", name: "One" },
    { value: "two", name: "Two" },
    { value: "three", name: "Three" },
    { value: "four", name: "Four" },
    { value: "five", name: "Five" },
  ];

  violation: ViolationType[] = [
    { value: "", name: "Choose Violation Type" },
    { value: "one", name: "Type-1" },
    { value: "two", name: "Type-2" },
    { value: "three", name: "Type-3" },
    { value: "four", name: "Type-4" },
    { value: "five", name: "Type-5" },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.manualForm = this.formBuilder.group({
      plateNumber: ["", Validators.required],
      date: ["", Validators.required],
      employee: ["", Validators.required],
      violationType: ["", Validators.required],
      amount: ["", Validators.required],
    });
  }

  getEmployeeData() {}

  getViolationData() {}

  onSubmit() {
    this.submitted = true;

    if(this.manualForm.invalid) {
      return;
    }
  }
}
