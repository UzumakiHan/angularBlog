import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {geBlogDetail,updateReadCount} from '../../api/index'
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.less']
})
export class BlogdetailComponent implements OnInit {
  blogid=0;
  readcount=0;
  blogDetail=[];
  htmlStr:'';
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
  constructor(public route:ActivatedRoute,public router:Router) {
  //  console.log(window.location.search)
    //console.log(this.route.queryParams._value);
    this.route.queryParams.subscribe((res)=>{
      this.blogid = res.id
     
      this.geBlogDetail(this.blogid)
    })
   }

  ngOnInit(): void {
  }
  async geBlogDetail(id){
    const result = await geBlogDetail(Number(id));
    this.blogDetail =(result as any).data
    this.htmlStr =(result as any).htmlstr
   this.readcount = Number(this.blogDetail[0].readcount)+1
   const result1 =await updateReadCount(Number(this.readcount),id)
  console.log( result1)
  }
  goBack():void{
    window.history.go(-1)
    // console.log(this.router)
  }
  onValueChange(value: Date): void {
   // console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    //console.log(`Current value: ${change.date}`);
   // console.log(`Current mode: ${change.mode}`);
  }
}
