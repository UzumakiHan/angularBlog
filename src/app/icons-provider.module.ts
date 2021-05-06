import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  HomeOutline,
  BoldOutline,
  Html5Outline,
  UserOutline,
  EyeOutline,
  TagOutline,
  FieldTimeOutline,
  LeftCircleTwoTone,
  LockOutline,
  LoginOutline,
  LogoutOutline,
  EditOutline,
  GithubOutline,
  DeleteOutline,
  EyeInvisibleOutline,
  PlusOutline,
  DownOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
  DashboardOutline,
  FormOutline,
  HomeOutline, 
  BoldOutline, 
  Html5Outline,
  EyeOutline,
  
  TagOutline,
  FieldTimeOutline,
  LeftCircleTwoTone,
  LockOutline,
  LoginOutline,
  LogoutOutline,
  EditOutline,
  GithubOutline,
  DeleteOutline,
  EyeInvisibleOutline,
  PlusOutline,
  DownOutline

];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
