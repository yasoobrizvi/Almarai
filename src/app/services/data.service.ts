import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  rowData() {
    return this.http.get("http://localhost:3000/rowData");
  }
  saveRowData(data: any) {
    console.log(data);

    return this.http.post("http://localhost:3000/rowData", data);
  }
  deleteRow(id: string) {
    console.log(id);

    return this.http.delete("http://localhost:3000/rowData/" + id);
  }
  uploadFine(fine: any) {
    console.log("Fine", fine);

    return this.http.post("http://localhost:3000/fine", fine);
  }
}
