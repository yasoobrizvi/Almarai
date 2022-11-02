import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UploadFromDirectoryComponent } from "../../pages/upload-from-directory/upload-from-directory.component";
import { UploadFineDataComponent } from "../../pages/upload-fine-data/upload-fine-data.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule } from "ag-grid-angular";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { FineAssignmentComponent } from 'app/pages/fine-assignment/fine-assignment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    AgGridModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    UploadFromDirectoryComponent,
    NotificationsComponent,
    UploadFineDataComponent,
    FineAssignmentComponent
  ],
})
export class AdminLayoutModule {}
