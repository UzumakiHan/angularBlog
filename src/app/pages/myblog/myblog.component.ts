import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import storageUtils from '../../utils/storageUtils'
import { getOwnBlog, getHotArticle, deleteArticle,changeUserInfo } from '../../api/index';
import { PAGE_SIZE, LIMIT_COUNT } from '../../utils/constants'
import { NzMessageService } from 'ng-zorro-antd/message';
// @NgModule({

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.less']
})
export class MyblogComponent implements OnInit {

  userInfo: object = {};
  blogList = [];//文章列表
  htmlList = [];
  hotBlogList = [];//热门文章
  total = 0;//总文章条数
  isVisible = false;
  username='Jeslie He';
  realname='';
  location='';
  information='';
  birthday='';
  sex='';
  job='222222222'
  constructor(public router: Router, private message: NzMessageService) { }

  ngOnInit(): void {
    this.userInfo = storageUtils.getUser();
    //console.log(this.userInfo)
    this.username = this.userInfo['username'];
    this.realname = this.userInfo['realname'];
    this.job =  this.userInfo['job'];
    this.sex =  this.userInfo['sex'];
    this.location = this.userInfo['location'];
    this.birthday = this.userInfo['birthday'];
    this.information = this.userInfo['information']
    this.getOwnBlog(1);
    this.getHotBlog();
  }
  //分页获取文章
  async getOwnBlog(pageNum) {
    const result = await getOwnBlog(this.userInfo['username'], pageNum, PAGE_SIZE);
    //console.log(result)
    this.blogList = (result as any).data.list;
    this.total = (result as any).data.pages
    this.htmlList = (result as any).message.list
  }
  //获取热门文章
  async getHotBlog() {
    const result = await getHotArticle(LIMIT_COUNT);
    this.hotBlogList = (result as any).data
    //console.log(this.hotBlogList)
  }
  //获取当前的页码
  getPage(pageNum) {
    // console.log(pageNum)
    this.getOwnBlog(pageNum)
  }
  //跳转到文章详情
  goBlogDetail(id): void {
    let queryParams: NavigationExtras = {
      queryParams: { 'id': id }
    }

    this.router.navigate(['/blogdetail'], queryParams)
  }

  createBlog() {
    this.router.navigate(['/publicblog/'])
  }
  async deleteBlog(e, id) {
    e.stopPropagation();
    const result = await deleteArticle(id);
   // console.log(result);
    if ((result as any).success_code === 200) {
      this.message.create('success', (result as any).message);
    } else {
      this.message.create('error', (result as any).message);
    }
  }
  editBlog(e, id) {
    e.stopPropagation();
    let queryParams: NavigationExtras = {
      queryParams: { 'id': id }
    }

    this.router.navigate(['/publicblog'], queryParams)
  }
  showEditModal(){
    this.isVisible = true;
  }

 async changeUserInfo(){
   this.isVisible = false;
    const result:any = await changeUserInfo(this.username,this.birthday,this.location,this.information,this.realname,this.job,this.sex);
    //console.log(result);
    if(result.success_code === 200){
      this.message.create('success', result.message);
      storageUtils.saveUser(result.data[0]);
     
    }else{
      this.message.create('error', result.message);
    }
  }

  handleCancel(): void {
    //console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
}
