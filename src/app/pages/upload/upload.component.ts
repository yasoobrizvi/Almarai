import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "app/services/data.service";

interface Fine {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  file: any;
  // name: string = "";
  value: string;
  invalid: boolean = false;

  constructor(private http: HttpClient, private fineData: DataService) {}

  fines: Fine[] = [
    { value: "Type-1", viewValue: "Type-1" },
    { value: "Type-2", viewValue: "Type-2" },
    { value: "Type-3", viewValue: "Type-3" },
    { value: "Type-4", viewValue: "Type-4" },
    { value: "Type-5", viewValue: "Type-5" },
  ];

  ngOnInit(): void {}

  getValue(fine: any) {
    this.value = fine.value;
  }

  // getName(name: string) {
  //   this.name = name;
  // }

  getFile(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (
      this.file &&
      this.value &&
      this.value !== ""
    ) {
      let fine = {};
      fine = {id: Math.floor(Math.random()*1000000000), value: this.value, fileName: this.file.name, file: this.file};

      console.log("file", this.file);
      console.log("fileName", this.file.name);
      console.log("value", this.value);

      this.fineData.uploadFine(fine).subscribe((result) => {});
    }
    else {
      this.invalid = true;
    }
  }
}
