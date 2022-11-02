import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { UploadFromDirectoryComponent } from '../../pages/upload-from-directory/upload-from-directory.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { FineTypeComponent } from '../../pages/fine-type/fine-type.component';
import { UploadComponent } from '../../pages/upload/upload.component';
import { EmployeeDataComponent } from 'app/pages/employee-data/employee-data.component';
import { UploadFineDataComponent } from "../../pages/upload-fine-data/upload-fine-data.component";
import { FineAssignmentComponent } from 'app/pages/fine-assignment/fine-assignment.component';
import { ManualFineAssignmentComponent } from 'app/pages/manual-fine-assignment/manual-fine-assignment';

export const AdminLayoutRoutes: Routes = [
    { path: 'finetype',      component: FineTypeComponent },
    { path: 'upload',          component: UploadComponent },
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    { path: 'upload-staff-directory',           component: UploadFromDirectoryComponent },
    { path: 'employee-data',           component: EmployeeDataComponent },
    { path: 'upload-fine-data',           component: UploadFineDataComponent },
    { path: 'fine-assignment', component: FineAssignmentComponent}
    { path: 'manual-fine-assignment',           component: ManualFineAssignmentComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
