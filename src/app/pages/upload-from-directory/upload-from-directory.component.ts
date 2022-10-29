import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from "app/services/data.service";

@Component({
  selector: "app-upload-from-directory",
  templateUrl: "./upload-from-directory.component.html",
  styleUrls: ["./upload-from-directory.component.scss"],
})
export class UploadFromDirectoryComponent implements OnInit {
  invalid: boolean = false;
  file: any;
  name: string;

  constructor(private http: HttpClient, private uploadForm: DataService) {}

  ngOnInit() {}

  getFile(event: any) {
    this.file = event.target.files[0];
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
