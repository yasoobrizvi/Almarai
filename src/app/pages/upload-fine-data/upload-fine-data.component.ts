import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from "app/services/data.service";

interface Country {
  id: string;
  name: string;
}

@Component({
  selector: "app-upload-fine-data",
  templateUrl: "./upload-fine-data.component.html",
  styleUrls: ["./upload-fine-data.component.scss"],
})

export class UploadFineDataComponent implements OnInit {
  invalid: boolean = false;
  file: any;
  name: string;
  countries: Country[] = [
    { id: "1", name: "India" },
    { id: "2", name: "Australia" },
    { id: "3", name: "Namibia" },
    { id: "4", name: "Srilanka" },
    { id: "5", name: "Kenia" },
  ];  
  constructor(private http: HttpClient, private uploadForm: DataService) {}

  ngOnInit() {}

  getFile(event: any) {
    this.file = event.target.files[0];
  }

  getValue(fine: any) {
    console.log("File Type",fine)
  }

  uploadFile() {
    if (this.file && this.file.name !== "") {
      let file = new FormData();
      file.append("file name", JSON.stringify(this.file.name));
      file.append("file", this.file, this.file.name);

      console.log("File", file);

      this.uploadForm.uploadForm(this.file).subscribe((response) => {
        console.log(response);
      });
    } else {
      this.invalid = true;
    }
  }
}
