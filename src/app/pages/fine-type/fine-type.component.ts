import { Component, OnInit } from "@angular/core";
import {
  CellValueChangedEvent,
  CheckboxSelectionCallbackParams,
  ColDef,
  GridReadyEvent,
  HeaderCheckboxSelectionCallbackParams,
  RowNodeTransaction,
  RowValueChangedEvent,
} from "ag-grid-community";
import { Module } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataService } from "app/services/data.service";
import { RowEditComponent } from "./row-edit/row-edit.component";

// export interface rowData {
//   rowData: any;
// }

@Component({
  selector: "app-fine-type",
  templateUrl: "./fine-type.component.html",
  styleUrls: ["./fine-type.component.scss"],
})
export class FineTypeComponent implements OnInit {
  // gridOptions: any;
  public modules: Module[] = [ClientSideRowModelModule, RangeSelectionModule];
  rowSelection: "single" | "multiple" = "multiple";

  faEdit = faEdit;
  faTrash = faTrash;

  rowData: any[] = [
    { type: "Type-1", englishName: "Type-1", arabicName: "النوع 1" },
    { type: "Type-2", englishName: "Type-2", arabicName: "النوع 2" },
    { type: "Type-3", englishName: "Type-3", arabicName: "النوع 3" },
    { type: "Type-4", englishName: "Type-4", arabicName: "النوع 4" },
    { type: "Type-5", englishName: "Type-5", arabicName: "النوع 5" },
  ];
  colDefs: ColDef[] = [
    {
      headerName: "",
      editable: false,
      filter: false,
      sortable: false,
      width: 10,
      headerCheckboxSelection: isFirstColumn,
      checkboxSelection: isFirstColumn,
    },
    { headerName: "Fine Type", field: "type" },
    { headerName: "Name (English)", field: "englishName" },
    { headerName: "Name (Arabic)", field: "arabicName" },
    {
      field: "Action",
      cellRenderer: RowEditComponent,
      editable: false,
      filter: false,
      sortable: false,
    },
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };

  gridApi: any;
  gridColumnApi: any;

  constructor(private gridData: DataService) {
    // gridData.rowData().subscribe((data) => (this.rowData = data));
    // this.gridOptions = {
    //   context: {
    //     componentParent: this,
    //   },
    // };
  }

  ngOnInit(): void {}

  // createNewFine() {
  //   // this.router.navigateByUrl('create-new-fine');
  //   const dialogRef = this.dialog.open(CreateNewFineComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // edit(rowData: any) {
  //   this.gridApi.setFocusedCell(1, "type");
  //   this.gridApi.startEditingCell({
  //     rowIndex: rowData.rowIndex,
  //     colKey: "type",
  //   });
  // }

  // addItems(addIndex: number | undefined) {
  //   const newItems = [this.createNewRowData()];
  //   const res = this.gridApi.applyTransaction({
  //     add: newItems,
  //     addIndex: addIndex,
  //   })!;
  //   this.printResult(res);
  // }

  // removeSelected() {
  //   const selectedRows = this.gridApi.getSelectedRows();
  //   this.gridApi.applyTransaction({ remove: selectedRows });
  // }

  addRow() {
    this.gridApi.applyTransaction({
      add: [
        {
          id: Math.floor(Math.random() * 10000000),
          type: "abc",
          englishName: "xyz",
          arabicName: "النوع 0",
        },
      ],
    });
  }

  onCellClicked(params: any) {
    console.log("params", params);
    console.log("RowData", this.rowData);

    // Handle click event for action cells
    if (
      params.column.colId === "Action" &&
      params.event.target.dataset.action
    ) {
      let action = params.event.target.dataset.action;

      if (action === "edit") {
        params.api.startEditingCell({
          rowIndex: params.node.rowIndex,
          // gets the first columnKey
          colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
        });
      }

      if (action === "delete") {
        this.gridData
          .deleteRow(params.data.id)
          .subscribe((result) => console.log(result));
      }

      if (action === "save") {
        if (
          (params.data.type !== "" || params.data.type !== "abc") &&
          (params.data.englishName !== "" ||
            params.data.englishName !== "xyx") &&
          (params.data.arabicName !== "" ||
            params.data.arabicName !== "النوع 0")
        ) {
          console.log(params.data);

          this.gridData
            .saveRowData(params.data)
            .subscribe((result) => console.log(result));
          params.api.stopEditing(true);
        } else {
          alert("Data cannot be empty");
        }
      }

      if (action === "cancel") {
        params.api.stopEditing(true);
      }
    }
  }

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log("event", event);

    console.log(
      "onCellValueChanged: " + event.colDef.field + " = " + event.newValue
    );
  }

  // onRowValueChanged(event: RowValueChangedEvent) {
  //   var data = event.data;
  //   console.log(
  //     'onRowValueChanged: (' +
  //       data.make +
  //       ', ' +
  //       data.model +
  //       ', ' +
  //       data.price +
  //       ', ' +
  //       data.field5 +
  //       ')'
  //   );
  // }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    // console.table(this.rowData);
  }

  onRowEditingStarted(params: any) {
    params.api.refreshCells({
      columns: ["Action"],
      rowNodes: [params.node],
      force: true,
    });
  }

  onRowEditingStopped(params: any) {
    params.api.refreshCells({
      columns: ["Action"],
      rowNodes: [params.node],
      force: true,
    });
  }

  newCount = 1;
  createNewRowData() {
    const newData = {};
    this.newCount++;
    return newData;
  }

  printResult(res: RowNodeTransaction) {
    console.log("---------------------------------------");
    if (res.add) {
      res.add.forEach(function (rowNode) {
        console.log("Added Row Node", rowNode);
      });
    }
    if (res.remove) {
      res.remove.forEach(function (rowNode) {
        console.log("Removed Row Node", rowNode);
      });
    }
    if (res.update) {
      res.update.forEach(function (rowNode) {
        console.log("Updated Row Node", rowNode);
      });
    }
  }
  //   columnDefs = [
  //     {headerName: 'Make', field: 'make'},
  //     {headerName: 'Model', field: 'model'},
  //     {headerName: 'Price', field: 'price'}
  // ];

  // rowData = [
  //     {make: 'Toyota', model: 'Celica', price: 35000},
  //     {make: 'Ford', model: 'Mondeo', price: 32000},
  //     {make: 'Porsche', model: 'Boxter', price: 72000}
  // ];
}

function actionCellRenderer(params: any) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell: { rowIndex: any }) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
    <button
    mat-raised-button
    style="  border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.7;
    border-radius: 5px;
    margin-top: 2px;
    background-color: #4caf50; /* Green */"
    data-action="save"> Save  </button>

    <button
    mat-raised-button
    style="  border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.7;
    border-radius: 5px;
    margin-top: 2px;
    background-color: #e7e7e7; /* Gray */
    color: black;"
    data-action="cancel" > Cancel </button>`;
  } else {
    eGui.innerHTML = `
    <button
    mat-raised-button
    style="  border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.7;
    border-radius: 5px;
    margin-top: 2px;
    background-color: #008cba; /* Blue */"
    data-action="edit" > Edit </button>

    <button
    mat-raised-button
    style="  border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 0.7;
    border-radius: 5px;
    margin-top: 2px;
    background-color: #f44336; /* Red */"
    data-action="delete" > Delete </button>`;
  }

  return eGui;
}

function isFirstColumn(
  params:
    | CheckboxSelectionCallbackParams
    | HeaderCheckboxSelectionCallbackParams
) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}
