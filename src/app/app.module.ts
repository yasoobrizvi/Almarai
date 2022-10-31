import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AgGridModule } from "ag-grid-angular";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FineTypeComponent } from "./pages/fine-type/fine-type.component";
import { CreateNewFineComponent } from "./pages/create-new-fine/create-new-fine.component";
import { EditComponent } from "./pages/fine-type/row-edit/edit/edit.component";
import { RowEditComponent } from "./pages/fine-type/row-edit/row-edit.component";
import { BrowserModule } from "@angular/platform-browser";
import { UploadComponent } from "./pages/upload/upload.component";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EmployeeDataComponent } from './pages/employee-data/employee-data.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FineTypeComponent,
    CreateNewFineComponent,
    EditComponent,
    RowEditComponent,
    UploadComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    BrowserModule,
    SidebarModule,
    NgbModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    ReactiveFormsModule,
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
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit,faTrash);
  }
}
