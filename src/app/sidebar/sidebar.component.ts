import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/finetype", title: "Manage Fine Types", icon: "nc-bank", class: "" },
  // { path: '/upload',         title: 'Manage Fine Assignment',             icon:'nc-diamond',    class: '' },
  {
    path: "/upload-fine-data",
    title: "Upload Fine Data",
    icon: "nc-spaceship",
    class: "",
  },
  {
    path: "/upload-staff-directory",
    title: "Upload Staff Directory",
    icon: "nc-single-02",
    class: "",
  },
  {
    path: "/fine-assignment",
    title: "Validate Fine Assignment",
    icon: "nc-caps-small",
    class: "",
  },
  {
    path: "/manual-fine-assignment",
    title: "Manual Fine Assignment",
    icon: "nc-tile-56",
    class: "",
  },
  // { path: '/dashboard',          title: 'Dashboard',              icon:'nc-bank',      class: '' },
  // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
  // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
  // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
  // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
  // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
