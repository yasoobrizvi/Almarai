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

export const AdminLayoutRoutes: Routes = [
    { path: 'finetype',      component: FineTypeComponent },
    { path: 'upload',          component: UploadComponent },
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    { path: 'upload-fine-data',           component: UploadFromDirectoryComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
