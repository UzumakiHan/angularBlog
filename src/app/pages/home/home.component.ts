import { Component, OnInit,NgModule } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';
import {CommonModule} from '@angular/common'
import {getAllBlog,getHotArticle,getBlogEditor} from '../../api/index';
import {PAGE_SIZE,LIMIT_COUNT} from '../../utils/constants'
// @NgModule({
//   imports:[
//     CommonModule
//   ],
//   declarations: [HomeComponent]
// })
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  editUserImg:string='';
  blogList=[];//文章列表
  htmlList = [];
  hotBlogList=[];//热门文章
  total=0;//总文章条数
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.getAllBlog(1);
    this.getHotBlog();
    this.getBlogEditor();
  }
  //分页获取文章
  async getAllBlog(pageNum){
    const result = await getAllBlog(pageNum,PAGE_SIZE);
    //console.log(result)
    this.blogList = (result as any).data.list;
    this.total =  (result as any).data.pages
    this.htmlList = (result as any).message.list
  }
  //获取热门文章
  async getHotBlog(){
    const result = await getHotArticle(LIMIT_COUNT);
    this.hotBlogList =(result as any).data
    //console.log(this.hotBlogList)
  }
  //获取当前的页码
  getPage(pageNum){
   // console.log(pageNum)
    this.getAllBlog(pageNum)
  }
  //跳转到文章详情
  goBlogDetail(id):void{
    let queryParams:NavigationExtras={
      queryParams:{'id':id}
    }

    this.router.navigate(['/blogdetail'],queryParams)
  }
  async getBlogEditor(){
    const result = await getBlogEditor('Jeslie He');
    
    this.editUserImg = (result as any).message[0].image;
    //console.log( this.editUserImg)
  }
  goGithub(){
    window.open('https://github.com/Jane-He628')
  }
  goCsdn(){
    window.open('https://blog.csdn.net/Hhjian524?spm=1010.2135.3001.5113')
  }

}
