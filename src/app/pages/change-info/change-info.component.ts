import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import md5 from 'md5';
import storageUtils from '../../utils/storageUtils';
import {changePassword} from '../../api';
import { Router} from '@angular/router'
@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.less']
})
export class ChangeInfoComponent implements OnInit {
  passwordVisible = false;
  originalPwd: string = '';
  changePwd: string = '';
  surePwd: string = '';
  userinfo: any;
  constructor(private message: NzMessageService,public router:Router) {
    this.userinfo = storageUtils.getUser();
   // console.log(this.userinfo)
  }

  ngOnInit(): void {
  }
  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    // this.changeContent();
  }

  next(): void {
    //console.log(this.current);
    if (this.current === 0) {
      //  console.log(this.originalPwd)
      if (this.originalPwd == '') {
        this.message.create('error', `请输入原来的密码`);
      } else {
        if (this.originalPwd.length < 5) {
          this.message.create('error', `密码长度大于5`);
        } else {
          if (md5(this.originalPwd) != this.userinfo.password) {
            this.message.create('error', `输入正确的密码`);
          } else {
            this.current += 1;
          }

        }

        // this.changeContent();
      }
    } else if (this.current === 1) {
      if (this.changePwd == '') {
        this.message.create('error', `请输入更改的密码`);
      } else {
        if (this.changePwd.length < 5) {
          this.message.create('error', `密码长度大于5`);
        } else {
          this.current += 1;
        }
        //this.changeContent();
      }
    }

  }

 async done() {
   // console.log('done');
    //console.log(this.changePwd, this.surePwd)
    if (this.changePwd != this.surePwd) {
      this.message.create('error', `密码不一致`);
    }else{
      const result:any = await changePassword(this.userinfo.id,this.surePwd);
      if(result.success_code === 200){
        this.message.create('success', result.message);
        storageUtils.removeUser();
        this.router.navigate(['/login'])
      }else{
        this.message.create('error', result.message);
      }
    }

  }


}
