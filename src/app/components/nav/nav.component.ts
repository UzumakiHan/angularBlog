import { Component, OnInit } from '@angular/core';
import storageUtils from '../../utils/storageUtils'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  loginKey:boolean=false;
  userInfo:object={};
  constructor( private message: NzMessageService,public router:Router) {
    this.isLogin();
   }

  ngOnInit(): void {
   
  }
  isLogin(){
    const user = storageUtils.getUser();
    
    if(user && user.id){
      this.loginKey = true;
      this.userInfo = user
    }
   // console.log(this.loginKey);
  }
  logout(){
    storageUtils.removeUser();
    this.message.create('success', '退出登录成功');
    
    // location.reload()
    this.router.navigate(['//'])
    location.reload()
  }
  goTopublic(){
    const user = storageUtils.getUser();
    if(user && user.id){
      this.router.navigate(['/publicblog'])
    }else{
      this.message.create('error', '请先登录');
    }
  }
  aboutBlog(){
    this.router.navigate(['/aboutblog'])
  }
  aboutMe(){
    this.router.navigate(['/aboutme'])
  }
  gotoWebExample(){
    window.open('http://42.194.193.249:3240/webExample')
  }

}
