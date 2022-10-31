import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from "app/services/data.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-upload-from-directory",
  templateUrl: "./upload-from-directory.component.html",
  styleUrls: ["./upload-from-directory.component.scss"],
})
export class UploadFromDirectoryComponent implements OnInit {
  invalid: boolean = false;
  fileName: boolean = false;
  file: any;
  name: string;
  formGroup: FormGroup;

  constructor(
    private http: HttpClient,
    private uploadForm: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      profile: [""],
    });
  }

  getFile(event: any) {
    console.log("File", event);

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.formGroup.get("profile").setValue(this.file);
    }

    this.fileName = true;
  }

  uploadFile() {
    if (this.file && this.file.name !== "") {
      var validExts = new Array(".xlsx", ".xls");
      var fileType = this.file.type;
      if (
        fileType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        fileType === "application/vnd.ms-excel"
      ) {
        const file = new FormData();
        file.append("file name", JSON.stringify(this.file.name));
        file.append("file", this.formGroup.get("profile").value);

        console.log("File", file);
        console.log("File1", this.file);
        console.log(
          "File2",
          file.append("file", this.formGroup.get("profile").value)
        );

        this.uploadForm
          .uploadForm(file)
          .subscribe((response) => console.log(response));
      } else {
        alert(
          "Invalid file selected, valid files are of " +
            validExts.toString() +
            " types."
        );
        return false;
      }
    } else {
      this.invalid = true;
    }
  }
}
