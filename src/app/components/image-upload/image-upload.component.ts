import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import {submitImage} from '../../api';
import storageUtils from '../../utils/storageUtils'
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.less']
})
export class ImageUploadComponent implements OnInit {
 userInfo:any;
  constructor(private message: NzMessageService) { 
    this.userInfo = storageUtils.getUser()
  }

  ngOnInit(): void {
  }
  
  fileList: NzUploadFile[] = [

  ];
  previewImage = '';
  previewVisible = false;
  handlePreview = (file: NzUploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  //图片上传返回
 async handleChange(info: { file: NzUploadFile }) {
    if (info.file.status === 'error') {
      //this.notify.error(‘上传图片异常，请重试‘);
    }
    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, (img: any) => {
        // this.room.showPhoto = img;
      });
      const result:any = info.file.response;
     // console.log(result)
      if(result.status === 0){
        this.message.create('success', result.msg);
        const updateResult:any = await submitImage(result.data['url'],this.userInfo['username']);
       if(updateResult.status === 200){
         storageUtils.saveUser(updateResult.data[0])
         location.reload()
       }
      }else{
        this.message.create('error', result.msg);
      }
   //   var photo = info.file.response.result.imageName;
    //  console.log(photo)
     // this.uploadImages.push(photo);
      // alert(this.room.photo);
     // this.notify.success(‘上传图片完成‘);
    }
  }
  private getBase64(img: File, callback: (img: any) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
}
